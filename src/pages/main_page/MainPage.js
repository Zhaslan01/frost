import Header from "../../components/header/Header";
import Category from '../../components/category/Category';
import ProductList from "../../components/productList/ProductList";
import Pages from "../../components/ui/pages/Pages";
import Footer from "../../components/footer/Footer";


function MainPage() {
    return (
        <>
            <Header/>
            <ProductList/>
            <Footer/>
        </>
    );
}

export default MainPage;
