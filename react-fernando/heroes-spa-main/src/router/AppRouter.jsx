import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth'
import { HeroesRoutes } from '../heroes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRoutes } from './PublicRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>

            <Route path="login" element={
              <PublicRoutes>
                <LoginPage />
              </PublicRoutes>
            } />

            <Route path="/*" element={
              <PrivateRouter>
                <HeroesRoutes />
              </PrivateRouter>
            } />
           
        </Routes>
    </>
  )
}