import { useState } from 'react'
import { btnPrimary } from '../lib/styles'

const fieldClass =
  'w-full rounded border border-deep/12 bg-white px-4 py-3.5 text-ink transition duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus:border-mid focus:outline-none focus:shadow-[0_0_0_3px_rgba(126,217,196,0.35)]'

export default function ContactForm({ title, fields, submitLabel, successMessage }) {
  const [status, setStatus] = useState('idle')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('success')
    event.currentTarget.reset()
  }

  return (
    <div>
      <h2 className="mb-6 text-[clamp(1.6rem,3vw,2rem)]">{title}</h2>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        {fields.map((field) => (
          <label key={field.id} className="grid gap-1.5" htmlFor={field.id}>
            <span className="text-[0.92rem] font-semibold">
              {field.label}
              {field.required ? ' *' : ''}
            </span>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.id}
                placeholder={field.placeholder}
                required={field.required}
                rows={5}
                className={fieldClass}
              />
            ) : (
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
                className={fieldClass}
              />
            )}
          </label>
        ))}
        <button type="submit" className={btnPrimary}>
          {submitLabel}
        </button>
      </form>
      {status === 'success' ? (
        <p
          className="mt-5 border-l-[3px] border-mint bg-mint/18 px-4 py-3.5 text-deep"
          role="status"
        >
          {successMessage}
        </p>
      ) : null}
    </div>
  )
}
