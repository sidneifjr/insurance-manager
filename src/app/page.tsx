import { getContent } from '@/api/getContent'
import { DashboardTable } from '@/components/dashboard/dashboard-table'
import { ModalForm } from '@/components/modal/modal-form'
import { H2 } from '@/components/typography/h2'
import { Paragraph } from '@/components/typography/paragraph'
import { writeDataToDatabase } from '@/modules/writeDataToDatabase'

export default async function Home() {
  await writeDataToDatabase()

  const data = await getContent()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <H2>Visão Geral</H2>

        <Paragraph>
          Confira os dados mais importantes dos assegurados cadastrados.
        </Paragraph>

        <ModalForm />
      </div>

      <DashboardTable data={data} />
    </div>
  )
}
