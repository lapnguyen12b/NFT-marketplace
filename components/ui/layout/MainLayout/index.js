import { Header } from "../../common";
import { Footer } from "../../common";
const MainLayout = ({children}) => {
  return (
    <div>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default MainLayout