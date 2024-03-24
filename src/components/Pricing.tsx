// Imports
import Header from "./Header"
import Footer from "./Footer"

/**
 * @description Pricing component
 */
const Pricing = () => {

  const data = [
    {
      title: "Package One",
      features: ["Access to all features", "Storage for 100 reports", "24/7 support"],
      price: "R1500 P/M"
    }, 
    {
      title: "Package Two",
      features: ["Access to all features", "Storage for 200 Reports", "24/7 support"],
      price: "R2000 P/M"
    }, 
    {
      title: "Package Three",
      features: ["Access to all features", "Unlimited storage for Reports", "24/7 support"],
      price: "R2500 P/M"
    }
  ]; 

  return <>
    <Header />
    <div className="mx-auto p-2 space-y-2">
      <div className="heading text-center space-y-2">
        <h1 className="text-lg">Our pricing</h1>
        <p>We offer 3 packages for companies to choose from</p>
        <p>Users will be priced at <strong>R150</strong> per user P/M</p>
      </div>
      <div className="lg:grid lg:grid-cols-3 lg:gap-4">
        {data.map((item, index) => (
          <div key={index} className="card-container flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <ul>
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex}>{feature}</li>
                  ))}
                </ul>
                <p className="card-price">{item.price}</p>
                <div className="card-actions justify-start">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
}

export default Pricing