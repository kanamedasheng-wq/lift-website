"use client";

import { FormEvent, ReactNode, useState } from "react";

const pains = [
  {
    label: "入口設計",
    icon: "↳",
    title: "友だち追加が伸びない",
    text: "QRコードは置いているのに、登録導線が最適化されておらず機会を逃している。",
    impact: "広告費が成果につながらない",
  },
  {
    label: "配信設計",
    icon: "✦",
    title: "配信を送っても反応がない",
    text: "内容も頻度もタグ設計もなんとなく。読まれる配信の型ができていない。",
    impact: "せっかくの見込み客が離脱する",
  },
  {
    label: "成果設計",
    icon: "↗",
    title: "成果につながっている実感がない",
    text: "友だち数だけが指標になっていて、来店・予約・購入までの導線が設計されていない。",
    impact: "売上までの数字が見えない",
  },
];

const flow = [
  {
    title: "ヒアリング",
    text: "現状の課題、目指したい成果、対象のお客様像をお伺いします。",
    icon: "◎",
  },
  {
    title: "設計",
    text: "友だち追加導線から配信シナリオ、タグ設計までの全体設計を行います。",
    icon: "⌘",
  },
  {
    title: "構築",
    text: "LINE公式アカウント／Lステップ上に実際の仕組みを構築します。",
    icon: "＜/＞",
  },
  {
    title: "運用開始",
    text: "配信を開始し、実際の反応・数値を計測していきます。",
    icon: "↗",
  },
  {
    title: "継続改善",
    text: "数値をもとに毎月改善提案を行い、成果を伸ばし続けます。",
    icon: "⟳",
  },
];

const faqs = [
  {
    q: "料金はいくらですか？",
    a: "ご支援範囲や構築内容によって異なります。現状とご希望を伺ったうえで、必要な内容だけをご提案・お見積もりします。",
  },
  {
    q: "LINE公式アカウントをまだ開設していなくても相談できますか？",
    a: "はい。アカウント開設前の段階から、目的に合わせた設計・構築までサポートできます。",
  },
  {
    q: "対応エリアはどこまでですか？",
    a: "オンラインでのご支援を中心に、全国からご相談いただけます。",
  },
  {
    q: "契約期間の縛りはありますか？",
    a: "ご支援内容によって異なります。ご契約前に期間と範囲を明確にご説明します。",
  },
  {
    q: "相談したら必ず契約しなければいけませんか？",
    a: "いいえ。現状整理だけでも問題ありません。内容をご確認いただき、必要だと感じた場合のみご依頼ください。",
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`} aria-label="LIFT">
      LIF<span>T</span>
    </span>
  );
}

function SectionHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <header className="section-heading">
      <span>{label}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}

function BenefitIcon({ type }: { type: "route" | "chart" | "chat" }) {
  const content: Record<typeof type, ReactNode> = {
    route: (
      <>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v5M5 17v-5h14v5" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V10M10 20V6M16 20v-8M22 20V3" />
        <path d="m3 8 6-4 6 4 7-6" />
      </>
    ),
    chat: (
      <>
        <path d="M4 5h16v11H9l-5 4z" />
        <circle cx="9" cy="10.5" r=".8" fill="currentColor" />
        <circle cx="12" cy="10.5" r=".8" fill="currentColor" />
        <circle cx="15" cy="10.5" r=".8" fill="currentColor" />
      </>
    ),
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {content[type]}
    </svg>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a href="#top" aria-label="LIFT トップへ">
          <Logo />
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#service">サービス</a>
          <a href="#flow">ご支援の流れ</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <a className="header-cta" href="#contact">
          無料で相談する
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-ambient hero-ambient-one" aria-hidden="true" />
        <div className="hero-ambient hero-ambient-two" aria-hidden="true" />
        <svg
          className="hero-growth"
          viewBox="0 0 900 520"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline
            className="growth-line-base"
            points="0,470 88,432 168,394 255,360 344,306 438,276 520,219 610,188 690,129 770,87 848,34 900,16"
          />
          <polyline
            className="growth-line-flow"
            points="0,470 88,432 168,394 255,360 344,306 438,276 520,219 610,188 690,129 770,87 848,34 900,16"
          />
          {[
            [88, 432],
            [168, 394],
            [255, 360],
            [344, 306],
            [438, 276],
            [520, 219],
            [610, 188],
            [690, 129],
            [770, 87],
            [848, 34],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              className="growth-node"
              cx={cx}
              cy={cy}
              r="7"
              style={{ animationDelay: `${index * 0.18}s` }}
            />
          ))}
        </svg>
        <div className="hero-copy">
          <span className="eyebrow">LINE公式アカウント × Lステップ専門支援</span>
          <h1>
            LINEを、
            <br />
            売上につながる
            <br className="mobile-break" />
            仕組みへ。
          </h1>
          <p>
            設計から運用改善まで。反応・予約・売上につながるLINE導線を、
            成果から逆算してつくります。
          </p>
        </div>

        <div className="hero-visual" aria-label="LINE運用ダッシュボードのイメージ">
          <div className="mini-chat">
            <b>ご案内ありがとうございます！</b>
            <span>サービスについて詳しく知りたいです。</span>
            <span>料金プランを教えてください。</span>
          </div>
          <div className="dashboard">
            <div className="dashboard-title">運用ダッシュボード</div>
            <div className="automation">
              <span>友だち追加</span>
              <span>シナリオ</span>
              <span>タグ管理</span>
              <span>予約導線</span>
            </div>
            <div className="chart">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
          <div className="phone">
            <div className="phone-head">LIFTサポート</div>
            <p>ご相談ありがとうございます！</p>
            <button>サービスについて</button>
            <button>料金について</button>
            <p>詳しい資料をお送りします。</p>
          </div>
        </div>

        <div className="benefits">
          <article>
            <span className="benefit-number">01</span>
            <div className="benefit-medallion"><BenefitIcon type="route" /></div>
            <small>一気通貫</small>
            <strong>設計〜運用まで</strong>
            <span>一気通貫</span>
          </article>
          <article>
            <span className="benefit-number">02</span>
            <div className="benefit-medallion"><BenefitIcon type="chart" /></div>
            <small>継続改善</small>
            <strong>数字を見て</strong>
            <span>継続改善</span>
          </article>
          <article>
            <span className="benefit-number">03</span>
            <div className="benefit-medallion"><BenefitIcon type="chat" /></div>
            <small>初回無料</small>
            <strong>初回相談</strong>
            <span>無料</span>
          </article>
        </div>
        <a className="primary-cta hero-cta" href="#contact">
          無料で相談する <span>›</span>
        </a>
        <p className="reassurance">✓ 無理な営業はありません</p>
      </section>

      <section className="challenge">
        <div className="challenge-grid" aria-hidden="true" />
        <SectionHeading
          label="CHALLENGE"
          title="こんなお悩み、ありませんか。"
          text="LINEを運用しているのに成果が見えない。その状態には、共通する3つの原因があります。"
        />
        <div className="pain-list">
          {pains.map((pain, index) => (
            <article key={pain.title}>
              <span className="pain-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="pain-icon" aria-hidden="true">
                {pain.icon}
              </div>
              <div className="pain-copy">
                <small>{pain.label}</small>
                <h3>{pain.title}</h3>
                <p>{pain.text}</p>
                <strong>{pain.impact}</strong>
              </div>
            </article>
          ))}
        </div>
        <div className="challenge-conclusion">
          <span>ROOT CAUSE</span>
          <p>
            問題はLINEそのものではなく、
            <strong>「成果までの導線設計」</strong>です。
          </p>
          <i aria-hidden="true">↓</i>
        </div>
      </section>

      <section className="service section-light" id="service">
        <SectionHeading
          label="SERVICE"
          title="サービス内容"
          text="LINE運用を、成果が出る仕組みへ。"
        />

        <article className="service-card">
          <div className="service-copy">
            <div className="service-number">
              <b>01</b>
              <span>初期構築</span>
            </div>
            <h3>成果につながる導線をつくる</h3>
            <strong>LINE・Lステップ構築</strong>
            <p>
              友だち追加から相談・予約・購入まで、お客様が迷わず進めるLINE導線を設計します。
            </p>
            <div className="feature-chips">
              <span>導線設計</span>
              <span>配信シナリオ</span>
              <span>タグ設計</span>
              <span>予約導線</span>
            </div>
          </div>
          <div className="service-graphic build-graphic" aria-hidden="true">
            <div className="mock-phone">
              <small>友だち追加ありがとうございます！</small>
              <button>相談したい</button>
              <button className="selected">予約したい</button>
              <button>商品について知りたい</button>
              <small>ご希望の日時を選択してください。</small>
              <button className="selected">予約する</button>
            </div>
            <div className="branch">
              <b>友だち追加</b>
              <div>
                <span>相談</span>
                <span>予約</span>
                <span>購入</span>
              </div>
            </div>
          </div>
        </article>

        <article className="service-card second-service">
          <div className="service-copy">
            <div className="service-number">
              <b>02</b>
              <span>運用改善</span>
            </div>
            <h3>数字を見ながら成果を伸ばす</h3>
            <strong>運用改善・伴走支援</strong>
            <p>
              反応率・予約率・売上を分析し、数字をもとに改善を重ねます。
            </p>
            <div className="feature-chips">
              <span>数値分析</span>
              <span>配信改善</span>
              <span>導線改善</span>
              <span>月次提案</span>
            </div>
          </div>
          <div className="analytics" aria-label="改善ダッシュボードのイメージ">
            <div className="kpis">
              <span>友だち数</span>
              <span>反応率</span>
              <span>予約率</span>
              <span>売上</span>
            </div>
            <div className="trend">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="cycle">
              <span>分析</span><b>→</b><span>改善提案</span><b>→</b><span>実行</span><b>→</b><span>検証</span>
            </div>
          </div>
        </article>

        <div className="inline-cta">
          <strong>構築して終わりではなく、成果が出るまで改善を続けます。</strong>
          <a className="primary-cta" href="#contact">
            無料で相談する <span>›</span>
          </a>
          <small>現状の課題整理だけでも大丈夫です</small>
        </div>
      </section>

      <section className="flow section-light" id="flow">
        <SectionHeading
          label="FLOW"
          title="ご支援の流れ"
          text="ヒアリングから構築、そして成果が伸び続ける運用へ。専任チームが伴走します。"
        />
        <div className="timeline">
          {flow.map((step, index) => (
            <article key={step.title} className={index === 4 ? "active" : ""}>
              <div className="step-icon">{step.icon}</div>
              <div className="step-copy">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
              <span className="step-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
        <div className="inline-cta">
          <strong>
            「今のやり方を変えたい」と思ったその日が、スタートラインです。
          </strong>
          <a className="primary-cta" href="#contact">
            まずは無料で相談する <span>›</span>
          </a>
          <small>相談だけでも大丈夫です</small>
        </div>
      </section>

      <section className="faq section-light" id="faq">
        <SectionHeading
          label="FAQ"
          title="よくある質問"
          text="ご相談前によくいただくご質問をまとめました。"
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index < 2}>
              <summary>
                <span>Q</span>
                <strong>{faq.q}</strong>
                <i>＋</i>
              </summary>
              <div className="answer">
                <span>A</span>
                <p>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section-light" id="contact">
        <SectionHeading
          label="CONTACT"
          title="無料相談・お問い合わせ"
          text="まずは現状のお悩みをお聞かせください。内容を確認のうえ、担当より折り返しご連絡いたします。"
        />
        <div className="trust-row">
          <span>✓ 初回相談無料</span>
          <span>✓ 無理な営業なし</span>
          <span>✓ オンライン対応</span>
        </div>
        {sent ? (
          <div className="sent-message" role="status">
            <span>✓</span>
            <h3>送信を受け付けました</h3>
            <p>お問い合わせありがとうございます。内容を確認のうえご連絡します。</p>
            <button onClick={() => setSent(false)}>フォームに戻る</button>
          </div>
        ) : (
          <form onSubmit={submitForm}>
            <fieldset>
              <legend>お問い合わせ種別 <b>*</b></legend>
              <div className="inquiry-types">
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="LINE構築の相談"
                    defaultChecked
                  />
                  <span>LINE構築の相談</span>
                </label>
                <label>
                  <input type="radio" name="type" value="運用改善の相談" />
                  <span>運用改善の相談</span>
                </label>
                <label>
                  <input type="radio" name="type" value="提携のご依頼" />
                  <span>提携のご依頼</span>
                </label>
                <label>
                  <input type="radio" name="type" value="その他" />
                  <span>その他</span>
                </label>
              </div>
            </fieldset>
            <label className="field">
              <span>お名前 <b>*</b></span>
              <input name="name" required placeholder="例）山田 太郎" />
            </label>
            <label className="field">
              <span>会社名・屋号</span>
              <input name="company" placeholder="任意" />
            </label>
            <label className="field">
              <span>メールアドレス <b>*</b></span>
              <input
                name="email"
                required
                type="email"
                placeholder="example@company.jp"
              />
            </label>
            <label className="field">
              <span>お問い合わせ内容 <b>*</b></span>
              <textarea
                name="message"
                required
                placeholder="現在の課題やご希望をご記入ください"
              />
            </label>
            <label className="privacy">
              <input type="checkbox" required />
              <span>
                <a href="#privacy">プライバシーポリシー</a>に同意する
              </span>
            </label>
            <button className="submit-button" type="submit">
              送信
            </button>
            <small>内容がまとまっていなくても大丈夫です</small>
          </form>
        )}
      </section>

      <footer>
        <Logo light />
        <p>LINE公式アカウント・Lステップ専門支援</p>
        <div>
          <a href="#privacy">プライバシーポリシー</a>
          <a href="#operator">運営者情報</a>
        </div>
        <small>© 2026 LIFT. All rights reserved.</small>
      </footer>

      <a className="floating-cta" href="#contact">
        無料で相談する
      </a>
    </main>
  );
}
