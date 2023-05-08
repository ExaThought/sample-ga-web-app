import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import { pageview } from "../lib/ga";
import { usePathname, useSearchParams } from 'next/navigation';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  let projectId = "G-H382LDYLBZ";
  const searchParams = useSearchParams();
  let fromMobile = searchParams.get('fromMobile');
  
  if(fromMobile == 1){
    projectId = "G-N32L6MLLWS";
  }

  console.log("project id --", projectId);
  
return (
  
  <>
  <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${projectId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${projectId}', {
              page_path: window.location.pathname,
          });
          window.gtag('event', 'click_button', {
            'event_category': 'Button',
            'event_label': 'My Button'
          });
          `,
          }}
        />
    <Link href="/page2">Go to page 2 _app.js</Link>
    <button>
      Click me
    </button>
  </>
);
}

export default MyApp;
