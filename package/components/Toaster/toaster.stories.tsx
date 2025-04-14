import { Meta, StoryObj } from '@storybook/react'
import { toast } from 'sonner'
import { Button } from '@pellegrinidev/piggy-ui'
import { Toaster } from './toaster'

const meta: Meta<typeof Toaster> = {
  title: 'PiggyUI/Components/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Toaster>

export const Default: Story = {
  render: () => (
    <>
      <Toaster />
      <div className="flex flex-col gap-3">
        <Button onClick={() => toast('Toast padrão')}>
          Mostrar Toast padrão
        </Button>
        <Button onClick={() => toast.success('Operação realizada com sucesso')}>
          Mostrar Toast sucesso
        </Button>
        <Button onClick={() => toast.error('Algo deu errado')}>
          Mostrar Toast erro
        </Button>
        <Button onClick={() => toast.warning('Atenção! Algo incomum ocorreu')}>
          Mostrar Toast aviso
        </Button>
        <Button onClick={() => toast.info('Informação importante')}>
          Mostrar Toast informativo
        </Button>
      </div>
    </>
  ),
}
