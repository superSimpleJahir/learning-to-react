const About = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in Bangladesh
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        <div className="w-full space-y-4">
          <img
            className="h-[200px] w-full rounded-xl object-cover md:h-full"
            src="https://dev-ui-image-assets.s3.ap-south-1.amazonaws.com/google-map.jpg"
            alt=""
          />
        </div>
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="w-full text-xl font-semibold  text-gray-900">Dhaka office</p>
            <p className="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
            <p className="text-sm font-medium">100, Badda City Phase-1, Dhaka</p>
          </div>
          <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="w-full text-xl font-semibold  text-gray-900">Head office</p>
            <p className="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
            <p className="text-sm font-medium">12th Main Rd, Barishal, Banglasesh</p>
          </div>
          <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p className="w-full text-xl font-semibold  text-gray-900">Khulna office</p>
            <p className="w-full text-base text-gray-700">Mon-Sat 9am to 5pm.</p>
            <p className="text-sm font-medium">42, Residency Rd, Aftaf Nagar, Badda, Dhaka</p>
          </div>
        </div>
        <hr className="mt-20" />
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us →</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Thilde Olaisen"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              Gabrielle Fernandez
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">Marketing Lead</p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Thilde Olaisen"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">Victória Silva</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Back-end developer
            </p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Thilde Olaisen"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
              Gabrielle Fernandez
            </p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">Sales</p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Thilde Olaisen"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">Sadie Lewis</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">Sales</p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Thilde Olaisen"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">Thilde Olaisen</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">Marketing Lead</p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Thilde Olaisen"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">Deepika Ramesh</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Front-end developer
            </p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=2"
              alt="Jordi Santiago"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">Jordi Santiago</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Front-end developer
            </p>
          </div>
          <div className="rounded-md border">
            <img
              src="https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=600&amp;w=600"
              alt="Kerim Fahri"
              className="h-[300px] w-full rounded-lg object-cover "
            />
            <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">Kerim Fahri</p>
            <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
              Back-end developer
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team →</p>
            <p className="text-3xl font-bold md:text-4xl">We&#x27;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </>
  );
};

export default About;
