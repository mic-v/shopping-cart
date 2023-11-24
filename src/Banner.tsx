
import bannerLogo from './assets/banner-img.svg';


function Banner() {
    return (
        <section className="h-full w-full m-0 py-8 px-8 flex flex-col items-center justify-around gap-16">
            <div className="text-4xl font-bold">Welcome to your one-stop shop to Knowledge</div>
            <div className="px-10">Need information on cloud security? We got plenty of selections for that. Want to know more about robots? We also have that. Nerd Books is your oyster</div>
            <figure className="w-1/2">
                <img className="" width="100%" src={bannerLogo}/>
            </figure>
            <button>shop now!</button>

        </section>
    )
}

export default Banner;