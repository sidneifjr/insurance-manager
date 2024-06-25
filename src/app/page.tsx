import { getItems } from '@/api/getItems'
import { DashboardTable } from '@/components/dashboard/dashboard-table'
import { ModalForm } from '@/components/modal/modal-form'
import { H2 } from '@/components/typography/h2'
import { Paragraph } from '@/components/typography/paragraph'
import { writeDataToDB } from '@/modules/writeDataToDB'

export default async function Home() {
  await writeDataToDB()

  const data = await getItems()

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <H2>Visão Geral</H2>

          <Paragraph>
            Confira os dados mais importantes dos assegurados cadastrados.
          </Paragraph>
        </div>

        <ModalForm />
      </div>

      <DashboardTable data={data} />
    </div>
  )
}
