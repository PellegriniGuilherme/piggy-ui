import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme="light"
      className="toaster group z-[9999]"
      position='top-right'
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'bg-brand-50 text-neutral-900 border border-brand-300 shadow-md rounded-lg px-5 py-4 flex items-center gap-4 min-w-[280px] transition-all duration-300',
          title: 'font-medium text-base',
          description: 'text-sm text-neutral-700 text-start',
          success: 'bg-success-100 text-success-600 border-success-300',
          error: 'bg-danger-100 text-rose-600 border-danger-300',
          warning: 'bg-orange-100 text-orange-700 border-orange-400',
          info: 'bg-secondary-100 text-secondary-800 border-secondary-300',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
