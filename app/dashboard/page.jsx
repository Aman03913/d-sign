import React from 'react'
import Welcome from '../components/dashboard/Welcome';
import DashboardLayout from './layout';

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Welcome />
    </DashboardLayout>
  )
}

export default DashboardPage;