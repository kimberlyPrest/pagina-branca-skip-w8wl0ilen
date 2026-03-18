import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-white m-0 p-0 overflow-hidden flex flex-col">
      <Outlet />
    </div>
  )
}
