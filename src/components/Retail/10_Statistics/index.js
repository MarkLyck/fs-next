import React from 'react'
import LazyLoad from 'react-lazyload'
import PropTypes from 'prop-types'
import Section from '~/ui-components/Section'
import SectionTitle from '~/ui-components/Section/SectionTitle'
import Beside from '~/ui-components/Section/Beside'
import Left from '~/ui-components/Section/Beside/Left'
import Right from '~/ui-components/Section/Beside/Right'
import DualBarChart from '~/ui-components/Charts/DualBarChart'
import DualUpDownChart from '~/ui-components/Charts/DualUpDownChart'
import { BesideContainer } from './styles'

const Statistics = ({ winRatio, planName, avgGain, avgLoss }) => (
  <LazyLoad height={898} once>
    <Section>
      <BesideContainer>
        <SectionTitle>Statistics</SectionTitle>
        <Beside>
          <Left data-center>
            <DualBarChart
              primaryStatistic={Math.floor(winRatio) || 90}
              secondaryStatistic={59}
              primaryName={planName || 'entry'}
              secondaryName="Market"
              primaryHeight={Math.floor(winRatio) || 90}
              secondaryHeight={59}
              maxHeight="200px"
              description="Winners in %"
              unit="%"
            />
            <p style={{ marginTop: '16px' }}>
              Historically, 88-92% of our recommendations have been successful. If you had bought random high-quality
              stocks, only approx. 59% of these would have earned a positive return. A staggering difference.
            </p>
          </Left>
          <Right data-center className="outperforming-years-chart">
            <DualBarChart
              primaryStatistic={40}
              secondaryStatistic={9}
              primaryName={planName || 'entry'}
              secondaryName="Market"
              primaryHeight={81}
              secondaryHeight={18}
              maxHeight="200px"
              description="Outperforming years"
            />
            <p style={{ marginTop: '16px' }}>
              Recommendations and model portfolio are based on timeless and proven investment principles, mathematical
              probabilities, and sound logic. The model portfolio has outperformed the S&P 500 in 81.6% of all years.
            </p>
          </Right>
        </Beside>
        <Beside>
          <Left data-center>
            <DualUpDownChart
              primaryStatistic={Math.floor(avgGain) || 0}
              primaryPrefix="+"
              secondaryStatistic={Math.floor(avgLoss) || 0}
              secondaryPrefix="-"
              primaryName="Gain"
              secondaryName="Loss"
              primaryHeight={Math.floor(avgGain) || 0}
              secondaryHeight={Math.floor(avgLoss) || 0}
              unit="%"
              description="Avg. gain/loss per stock"
            />
          </Left>
          <Right data-center className="win-loss-chart">
            <DualBarChart
              primaryStatistic={Math.floor(winRatio) || 0}
              secondaryStatistic={100 - Math.floor(winRatio) || 0}
              primaryName="Wins"
              secondaryName="Losses"
              primaryHeight={Math.floor(winRatio) || 0}
              secondaryHeight={100 - Math.floor(winRatio) || 0}
              maxHeight="200px"
              unit="%"
              description="Win/loss ratio"
            />
          </Right>
        </Beside>
        <p style={{ marginTop: '16px' }}>
          We specialize in high-probability investments – a high probability of long-term gain combined with a low
          probability of loss. We prefer to buy good businesses at fair prices with a margin of safety, shielding us
          from some downside, while enjoying the upside of owning businesses that earn a meaningful return on capital.
        </p>
      </BesideContainer>
    </Section>
  </LazyLoad>
)

Statistics.defaultProps = {
  avgGain: 0,
  avgLoss: 0,
}

Statistics.propTypes = {
  winRatio: PropTypes.number,
  avgGain: PropTypes.number,
  avgLoss: PropTypes.number,
  planName: PropTypes.string,
}

export default Statistics
