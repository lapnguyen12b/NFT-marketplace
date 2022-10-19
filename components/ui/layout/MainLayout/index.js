import { Header, Footer } from "../../common";
const MainLayout = ({children}) => {
  return (
    <div>
      <Header/>
        <div>
          <div className="fit max-w-[1440px] mx-auto">{children}</div>
        </div>
      <Footer/>
    </div>
  )
}

export default MainLayout