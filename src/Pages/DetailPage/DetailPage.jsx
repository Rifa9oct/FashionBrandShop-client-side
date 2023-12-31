import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const DetailPage = () => {
    const {user} = useContext(AuthContext);
    const email = user.email;

    const loadedProduct = useLoaderData();
    console.log(loadedProduct);
    const { photoUrl, name,description,brand, type, price, rating } = loadedProduct;

    const mycart = {email, photoUrl, name, brand, type, price, rating, description};
    console.log(mycart)

    const handleClick = () => {
        fetch('https://fashion-brand-shop-server-side.vercel.app/mycarts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(mycart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Cart added successfully.',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }

return (
    <div className="max-w-[1320px] mx-auto">
        <h1 className="text-4xl text-center mt-10 text-blue-600">Product Detail</h1>
        <div className="flex flex-col-reverse  gap-8 lg:flex-row lg:my-20 justify-center items-center p-5">
            <div className="md:w-2/4">
                <h1 className="underline-offset-4 mt-5 md:mt-0 underline mb-5 text-2xl font-bold">{name} :</h1>
                <p className="text-gray-500">{description}</p>
                <button onClick={handleClick} className="btn ml-32 mb-10 lg:mb-0 lg:ml-0 text-sm bg-blue-400 mt-5 text-white hover:bg-blue-600">Add to Cart</button>
            </div>
            <img className="md:w-1/4" src={photoUrl} />
        </div>
    </div>
);
};

export default DetailPage;