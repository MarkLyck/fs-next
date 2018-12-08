import React from 'react'
import PropTypes from 'prop-types'
import countBy from 'lodash.countby'
import get from 'lodash.get'
import { format, subDays } from 'date-fns'
import LineGraph from 'ui-components/Charts/LineGraph'
import { GraphContainer, Container } from './styles'

const createChartData = (visitors, users) => {
  // gets signup dates from all users
  const signUpDays = countBy(users, user => format(user.createdAt, 'YYYY-MM-DD'))

  const cancelDays = countBy(users, user =>
    format(new Date(get(user, 'stripeSubscription.canceled_at') * 1000), 'YYYY-MM-DD')
  )

  const visitorData = countBy(visitors, visitor => format(visitor.createdAt, 'YYYY-MM-DD'))

  const days = []
  for (let i = 0; i <= 30; i++) {
    days.push(format(subDays(new Date(), 30 - i), 'YYYY-MM-DD'))
  }

  return days.map(date => ({
    date,
    visitors: visitorData[date] || 0,
    signUps: signUpDays[date] || 0,
    cancelations: cancelDays[date] || 0,
  }))
}

const DAUGraph = ({ visitors, users, serialChartsReady }) => {
  if (!serialChartsReady || (!visitors.length && !users.length)) {
    return (
      <div id="result-chart" className="loading">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      </div>
    )
  }
  const chartData = createChartData(visitors, users)

  const graphs = [
    {
      id: 'firstVisits',
      lineColor: '#27A5F9',
      lineThickness: 2,
      fillAlphas: 0.4,
      type: 'smoothedLine',
      valueField: 'visitors',
      balloonText: '<div class="suggestion-balloon"><p class="ticker">New visitors</p> <p>[[value]]</p></div>',
    },
    {
      alphaField: 'alpha',
      balloonText: '<div class="suggestion-balloon"><p class="ticker">Signups:</p> <p>[[value]]</p></div>',
      lineColor: '#12D99E',
      lineThickness: 2,
      fillAlphas: 0.6,
      type: 'smoothedLine',
      valueField: 'signUps',
    },
    {
      alphaField: 'alpha',
      balloonText: '<div class="suggestion-balloon"><p class="ticker">cancelled:</p> <p>[[value]]</p></div>',
      lineColor: '#EC1B5F',
      lineThickness: 2,
      fillAlphas: 0.6,
      clustered: false,
      type: 'smoothedLine',
      valueField: 'cancelations',
    },
  ]

  return (
    <Container>
      <GraphContainer>
        <LineGraph
          id="dau-graph"
          graphs={graphs}
          data={chartData}
          axisAlpha={0}
          gridOpacity={0}
          insideX
          insideY
          labelYOffset={24}
          autoMargins={false}
          marginLeft={-24}
          marginRight={-25}
          marginBottom={-2}
          categoryBoldLabels={true}
          categoryAxisColor="#FFF"
        />
      </GraphContainer>
    </Container>
  )
}

DAUGraph.propTypes = {
  visitors: PropTypes.array,
  users: PropTypes.array,
}

export default DAUGraph