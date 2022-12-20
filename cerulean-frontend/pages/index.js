import Head from "next/head";
import Image from "next/image";
import ConnectWallet from "../components/ConnectWallet";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-between text-center">
      <Head>
        <title>Cerulean Marketplace</title>
        <meta name="description" content="Cerulean Marketplace by ZeroAuthority DAO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Cerulean MP Starter Template</h1>

        <div className="">
          {/* ConnectWallet file: `../components/ConnectWallet.js` */}
          <ConnectWallet />
        </div>
      </main>

      <footer className="text-center">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
