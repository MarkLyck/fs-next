import React, { Component, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import searchIcon from 'static/icons/reports/ai_report_search.svg'
import errorIcon from 'static/icons/reports/ai_report_error.svg'
import LoadingError from 'ui-components/Error/LoadingError'
import Loader from 'ui-components/Loader'
import Report from 'components/Dashboard/Reports/Report'
import { SEARCH_REPORTS_QUERY } from 'common/queries'
import SearchBar from './SearchBar'
import ReportItem from './ReportItem'
import { ReportContainer, SectionHeader, IconContainer, ReportIcon, IconTitle, IconSubtitle } from './styles'
import ReportsOnboarding from './Onboarding'

const marketCaps = {
  entry: 5000,
  premium: 2000,
  business: 250,
  fund: 0,
}

const getMarketCap = user => {
  if (user.type === 'admin') return 0
  return marketCaps[user.plan]
}

const Reports = ({ user }) => {
  console.log('user', user)
  if (!user || !user.intros) return null
  const hasSeenReportIntro = user && user.intros && user.intros.reports
  console.log('hasSeenReportIntro', hasSeenReportIntro)
  const [searchTerm, setSearchTerm] = useState('')
  const [onboardingVisible, setOnboardingVisible] = useState(!hasSeenReportIntro)
  const [selectedReport, setSelectedReport] = useState(null)
  const { loading: searchLoading, error, data } = useQuery(SEARCH_REPORTS_QUERY, {
    variables: { searchTerm, marketCap: getMarketCap(user) },
  })

  if (!user || !user.plan || !data) return <Loader />
  if (error || !data) return <LoadingError error={error} />

  const aiReports = data.aIReportsList.items || []

  const handleSearchTermChange = e => {
    setSearchTerm(e.target.value)
    setSelectedReport(null)
  }

  const renderOnboarding = () =>
    onboardingVisible && (
      <ReportsOnboarding
        onboardingVisible={onboardingVisible}
        setOnboardingVisible={setOnboardingVisible}
        user={user}
      />
    )

  const renderInitial = () => (
    <ReportContainer>
      {renderOnboarding()}
      <SectionHeader>Search</SectionHeader>
      <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} />
      <IconContainer>
        <ReportIcon
          dangerouslySetInnerHTML={{
            __html: searchIcon,
          }}
        />
        <IconTitle>AI Investment reports</IconTitle>
        <IconSubtitle>Entry has access to stocks with a market cap over $5 billion.</IconSubtitle>
      </IconContainer>
    </ReportContainer>
  )

  const renderReports = data => {
    const isSingleReport = (aiReports && aiReports.length === 1) || selectedReport

    if (isSingleReport) {
      const report = selectedReport ? selectedReport : aiReports[0]
      return (
        <React.Fragment>
          <Report report={report} setOnboardingVisible={setOnboardingVisible} />
        </React.Fragment>
      )
    } else if (aiReports.length === 0) {
      return (
        <IconContainer>
          <ReportIcon
            dangerouslySetInnerHTML={{
              __html: errorIcon,
            }}
          />
          <IconTitle>No reports found</IconTitle>
          <IconSubtitle>We couldn't find any reports with that name</IconSubtitle>
        </IconContainer>
      )
    }

    return aiReports.map(report => (
      <ReportItem key={report.ticker} report={report} setSelectedReport={setSelectedReport} />
    ))
  }

  if (!searchTerm.length) {
    return renderInitial()
  }

  return (
    <ReportContainer>
      {renderOnboarding()}
      <SectionHeader>Search</SectionHeader>
      <SearchBar searchTerm={searchTerm} handleSearchTermChange={handleSearchTermChange} loading={searchLoading} />
      {!searchLoading && renderReports(data)}
    </ReportContainer>
  )
}

export default Reports
