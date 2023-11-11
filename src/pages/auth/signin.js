import {getProviders, signIn} from "next-auth/react";
import Header from "@/components/Header";


export default function SignIn(providers) {
  return (
    <>
      <Header />
      <div className={"flex items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center"}>
        <img className={"hidden object-cover rotate-6 md:inline-flex md:w-48"} src={"https://superviral.com.au/wp-content/uploads/2021/08/instagix-banner-graphic.png"} alt={"instagram"} />
        <div className={"mt-40"}>
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className={"flex flex-col items-center"}>
              <img
                src={"https://www.freepnglogos.com/uploads/instagram-logos-png-images-free-download-2.png"}
                alt={"instagram"}
                className={"w-40 justify-center object-contain"}
              />
              <p className="text-sm italic my-10 text-center">This app is created for learning purposes</p>
              <button className={"bg-blue-500 rounded-lg text-white p-3 hover:bg-blue-600"} onClick={() => signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}</button>
            </div>
            ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  // ToDo: vercelだとなぜかnullになる
  const providers = await getProviders();
  return {
    props: {
      google: {
        id: 'google',
        name: 'Google',
        type: 'oauth',
        signinUrl: 'https://iristagram.vercel.app/api/auth/signin/google',
        callbackUrl: 'https://iristagram.vercel.app/api/auth/callback/google'
      }
    },
  }
}