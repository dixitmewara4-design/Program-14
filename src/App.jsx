
import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  course: 'BCA',
  semester: '5',
  gender: '',
}

function App() {
  const [form, setForm] = useState(initialForm)
  const [student, setStudent] = useState(null)
  const [error, setError] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.gender) {
      setError('Please complete all fields before registering.')
      return
    }

    setStudent({ ...form, name: form.name.trim() })
    setError('')
  }

  function handleReset() {
    setForm(initialForm)
    setStudent(null)
    setError('')
  }

  const inputClass =
    'mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400 focus:ring-2 focus:ring-violet-400/20'

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-10 text-white sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500 text-2xl font-black">
              S
            </div>
            <div>
              <p className="text-xl font-black">
                Student<span className="text-violet-400">Sphere</span>
              </p>
              <p className="text-xs text-slate-500">Registration Portal</p>
            </div>
          </div>

          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-semibold text-emerald-300">
            PRACTICAL 14 · CONTROLLED FORM
          </span>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              Student information
            </p>
            <h1 className="mt-3 text-3xl font-black sm:text-4xl">
              Create your profile.
            </h1>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Register using controlled React inputs powered by useState.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-300">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-300">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  required
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="course" className="text-sm font-semibold text-slate-300">
                    Course
                  </label>
                  <select
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {['BCA', 'BBA', 'B.Com', 'B.Sc.', 'B.Tech'].map((course) => (
                      <option key={course}>{course}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="semester" className="text-sm font-semibold text-slate-300">
                    Semester
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    value={form.semester}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                      <option key={number} value={number}>
                        Semester {number}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <fieldset>
                <legend className="text-sm font-semibold text-slate-300">
                  Gender
                </legend>
                <div className="mt-3 flex flex-wrap gap-3">
                  {['Male', 'Female', 'Other'].map((option) => (
                    <label
                      key={option}
                      className={`flex cursor-pointer items-center gap-2 rounded-xl border px-4 py-3 text-sm transition ${
                        form.gender === option
                          ? 'border-violet-400 bg-violet-500/10 text-violet-200'
                          : 'border-slate-700 text-slate-400 hover:border-slate-500'
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={form.gender === option}
                        onChange={handleChange}
                        required
                        className="accent-violet-400"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              {error && (
                <p role="alert" className="rounded-xl border border-rose-400/20 bg-rose-400/10 p-3 text-sm text-rose-300">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-bold transition hover:bg-violet-400"
                >
                  Register Student →
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-white/5"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/15 to-slate-900 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-300">
                Live preview
              </p>
              <h2 className="mt-3 text-2xl font-black">Your details, in real time.</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Watch the preview update as you fill in the form.
              </p>

              <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                {[
                  ['Name', form.name || 'Not entered'],
                  ['Email', form.email || 'Not entered'],
                  ['Course', form.course],
                  ['Semester', form.semester],
                  ['Gender', form.gender || 'Not selected'],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-center justify-between gap-3">
                    <span className="text-sm text-slate-500">{label}</span>
                    <span className="break-all text-right text-sm font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900 p-6">
              <p className="text-sm font-bold">Registration status</p>
              {student ? (
                <div className="mt-4">
                  <p className="text-sm font-semibold text-emerald-300">
                    ✓ Registration successful
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    {student.name} is registered in {student.course}, Semester {student.semester}.
                  </p>
                  <p className="mt-3 break-all text-sm text-slate-300">
                    Email: {student.email}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">
                    Gender: {student.gender}
                  </p>
                </div>
              ) : (
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Submitted student details will appear here after registration.
                </p>
              )}
            </div>

            <p className="px-2 text-xs leading-5 text-slate-600">
              React useState · Controlled inputs · Event handling · Tailwind CSS
            </p>
          </aside>
        </section>
      </div>
    </main>
  )
}

export default App
