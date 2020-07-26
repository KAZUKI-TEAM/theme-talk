import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Theme Talk</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
        <meta name="description" content="Theme Talkはンライン飲み会やパーティーで話すお題を指定し、場を盛り上げるのを助けます。" />
      </Head>

      <main>
        <div className="inner-container">
          <h1 className="title">
            <span className="title-accent">H</span>ow to <span className="title-accent">U</span>se
          </h1>

          <div className="kv">
            <img src="/main-rule.svg" alt="Theme Talk" />
          </div>

          <p className="description u-mb10">
            アプリを開いていただきありがとうございます。<br />
            利用方法は様々ですが、一例としてサンプルの遊び方を以下に記載しています。<br />
            このアプリを使って楽しい時間をさらに盛り上げてください🎉
          </p>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">遊び方のサンプル</h2>
              <ol className="order-list u-mb30">
                <li className="order-list__item">まずは乾杯しましょう🍻</li>
                <li className="order-list__item">進行役はゲーム参加者へ1から順に番号を割り振ります。<br />(Zoomなどで利用する場合は名前の前に番号を記載すると分かり易いです)</li>
                <li className="order-list__item">トップページ画面で人数を入力し、ゲームスタートのボタンを押します。</li>
                <li className="order-list__item">オンラインで利用する場合は画面共有をして、進行役がアプリの操作を行います。</li>
                <li className="order-list__item">ゲームがスタートすると話し手とお題をアプリが選定して指示を出します。</li>
                <li className="order-list__item">指示を受けた人はお題に沿った内容を話します。</li>
                <li className="order-list__item">話し手に質問などしながら会話を楽しみます。</li>
                <li className="order-list__item">5分ほど話をして落ち着いたら、次のテーマへ移行します。</li>
              </ol>

              <Link href="/rule">
                <a className="btn">トップページへ戻る</a>
              </Link>
            </div>
          </section>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">アプリのインストール方法</h2>
              <p className="description u-mb10">当アプリはブラウザ上からお使いのデバイスにインストールすることができます。<br/>デバイスにインストールすることで素早くアプリを立ち上げることができます。</p>
              <p className="description u-mb10">PC, Androidユーザーは以下のリンクを参照してみてください。</p>

              <p className="description u-mb40">
                <a href="https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=ja&oco=1" className="link" target="_blank" rel="noopener">Google Chromeでのインストール手順</a>        
              </p>

              <p className="description u-mb10">iPhone、iPadユーザーはsafariを立ち上げて以下手順にしたがってください。</p>

              <p className="description u-mb10">
                <img src="/ios-howto.gif" alt="ホームスクリーン画面" />
              </p>

              <p className="description u-mb20">赤枠の「ホーム画面に追加」からインストールします。</p>

              <p className="description u-mb10">
                <img src="/ios-howto02.gif" alt="ホームスクリーン画面" />
              </p>
            </div>
          </section>

          <section className="u-mb40">
            <div className="sec-content">
              <h2 className="sub-headding">利用上の注意事項</h2>
              <p className="description u-mb10">以下の項目を遵守してご利用ください。</p>
              <ul className="bullet-list u-mb10">
                <li className="bullet-list__item">参加者の気分を害する発言を禁止します。</li>
                <li className="bullet-list__item">ゲーム内では先輩、後輩、上司、部下といったポジションの優劣関係なく発言することを許容してください。</li>
                <li className="bullet-list__item">ゲーム内で話した内容は原則ゲーム内に留めるようにしてください。</li>
              </ul>
              <p className="description">当サービスの利用によって生じた損害や被害について<br/>管理人は一切責任を負いません。</p>
            </div>
          </section>

          <Link href="/rule">
            <a className="btn">トップページへ戻る</a>
          </Link>

        </div>
      </main>

      <footer className="footer">
        <p className="footer-text">Let's have fun together!!</p>
      </footer>

      <style jsx global>{`
        /* CSS Remedy */
        *,::after,::before{box-sizing:border-box}html{line-sizing:normal}body{margin:0}h1{font-size:2rem}h2{font-size:1.5rem}h3{font-size:1.17rem}h4{font-size:1rem}h5{font-size:.83rem}h6{font-size:.67rem}h1{margin:.67em 0}pre{white-space:pre-wrap}hr{border-style:solid;border-width:1px 0 0;color:inherit;height:0;overflow:visible}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle;max-width:100%}canvas,img,svg,video{height:auto}audio{width:100%}img{border-style:none}svg{overflow:hidden}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}
        html,
        body {
          font-size: 62.5%;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        @for $i from 0 through 60 {
          .u-mt#{$i * 5} {
            margin-top: #{$i * 5}px;
          }
        }

        @for $i from 0 through 60 {
          .u-mb#{$i * 5} {
            margin-bottom: #{$i * 5}px;
          }
        }
        @for $i from 0 through 60 {
          .u-ml#{$i * 5} {
            margin-left: #{$i * 5}px;
          }
        }
        @for $i from 0 through 60 {
          .u-mr#{$i * 5} {
            margin-right: #{$i * 5}px;
          }
        }
      `}</style>

      <style jsx>{`
        $main-color: #0070f3;

        main {
          width: 100%;
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .inner-container {
          width: 100%;

          @media (max-width: 768px) {
            padding: 0 1rem;
            box-sizing: border-box;
          }
        }

        .sec-content {
          width: 600px;
          margin-right: auto;
          margin-left: auto;
          text-align: center;

          @media (max-width: 768px) {
            width: 100%;
            padding: 0 1rem;
            box-sizing: border-box;
          }
        }

        .order-list {
          font-size: 1.6rem;
          text-align: left;
          counter-reset: order-list;
          list-style: none;
        }

        .order-list__item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 1em;
          line-height: 1.4;

          &::before {
            content: counter(order-list) ". ";
            position: absolute;
            top: 0;
            left: 0;
            font-weight: bold;
            color: $main-color;
            counter-increment: order-list;
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .bullet-list {
          font-size: 1.6rem;
          text-align: left;
          list-style: none;
        }
        
        .bullet-list__item {
          position: relative;
          margin-bottom: 1rem;
          padding-left: 1em;
        
          &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0.5em;
            left: 0;
            width: 0.4em;
            height: 0.4em;
            border-radius: 50%;
            background-color: $main-color;
          }
        
          &:last-child {
            margin-bottom: 0;
          }
        }

        .sub-headding {
          position: relative;
          display: inline-block;
          padding: 0 5.5rem;
          text-align: center;
          font-size: 2.4rem;

          &::before, &::after {
            content: '';
            position: absolute;
            top: 50%;
            display: inline-block;
            width: 4.5rem;
            height: 2px;
            background-color: $main-color;
          }

          &::before {
            left: 0;
          }

          &::after {
            right: 0;
          }
        }

        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          background: $main-color;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .footer-text {
          font-size: 1.2rem;
          color: #fff;
        }

        .kv {
          width: 400px;
          margin: 3rem auto;

          @media (max-width: 768px) {
            width: 100%;
          }

          img {
            max-width: 100%;
          }
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 5.6rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.6rem;
        }

        .link {
          color: #0070f3;

          &:hover {
            text-decoration: none;
          }
        }

        .btn {
          display: block;
          padding: 2rem 1rem;
          box-sizing: border-box;
          max-width: 380px;
          margin: 0 auto;
          text-align: center;
          letter-spacing: 2px;
          font-size: 2.2rem;
          border-radius: 1rem;
          color: #fff;
          background: #0070f3;
          text-decoration: none;
          cursor: pointer;

          &:hover {
            opacity: .7;
          }
        }

        .title-accent {
          color: #0070f3;
        }

        .form-group {
          max-width: 380px;
          margin-right: auto;
          margin-left: auto;
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.5rem;
          font-size: 2rem;
          text-align: center;
          border-radius: 3px;
          border: 2px solid #ddd;
          box-sizing: border-box;
          -webkit-appearance: none;
        }

        .form-text {
          font-size: 2.4rem;
        }

        @media (max-width: 768px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
