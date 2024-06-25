const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full flex-grow overflow-y-hidden flex items-center justify-center">
      {children}
    </div>
  )
}

export default AuthLayout
