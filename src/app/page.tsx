import { getContent } from '@/api/getContent'
import { DashboardTable } from '@/components/dashboard/dashboard-table'
import { H2 } from '@/components/typography/h2'
import { writeDataToDatabase } from '@/modules/writeDataToDatabase'

export default async function Home() {
  await writeDataToDatabase()

  const data = await getContent()

  return (
    <>
      <H2>Visão Geral</H2>

      <DashboardTable data={data} />
    </>
  )
}
