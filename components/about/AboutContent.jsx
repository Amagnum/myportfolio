import OptimizedImage from "../OptimizedImage";
import { pages } from "../../content/site";

const { hero, sections, experience } = pages.about;
const [first, second, third] = sections;

export default function AboutContent() {
  return (
    <div
      data-framer-root=""
      className="framer-U12Cq framer-xIMGr framer-OvXIB framer-r7dCw framer-HmoXg framer-kZscH framer-afngx1"
      style={{ minHeight: "100vh", width: "auto", display: "contents" }}
    >
      <section className="framer-18f6q1j" data-framer-name="Hero">
        <div className="framer-1m26fn3" data-framer-name="Container">
          <div className="ssr-variant">
            <div className="framer-1ewvsn3" data-framer-name="Image" style={{ willChange: "transform", opacity: "1", transform: "none" }}>
              <div
                style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}
                data-framer-background-image-wrapper="true"
              >
                <OptimizedImage src={hero.image.src} alt={hero.image.alt} sizes="100vw" priority style={hero.image.position ? { objectPosition: hero.image.position } : undefined} />
              </div>
              <div className="framer-etij8s" data-framer-name="Overlay"></div>
            </div>
          </div>
          <div className="framer-1tlnafg" data-framer-name="Text Wrapper">
            <div className="framer-td59qg" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
              <h1
                className="framer-text framer-styles-preset-1iszveu"
                data-styles-preset="BxrGaJblF"
                dir="auto"
                style={{ "--framer-text-color": "var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))" }}
              >
                {hero.title}
              </h1>
            </div>
            <div className="framer-l2xvvn" data-framer-name="Text Wrapper">
              <div className="framer-1wf2ijs" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p
                  className="framer-text framer-styles-preset-1tk7q8p"
                  data-styles-preset="f0_yLVQjh"
                  dir="auto"
                  style={{ "--framer-text-color": "var(--token-880999e0-fa5d-4c65-a75a-ae1653ed7391, rgb(255, 255, 255))" }}
                >
                  {hero.description}
                </p>
              </div>
              <div className="ssr-variant">
                <div className="framer-jygs4x-container">
                  <a
                    className="framer-IYN0L framer-ZROfX framer-l5zbuo framer-v-l5zbuo framer-11131nd"
                    data-framer-name="Primary"
                    href={hero.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      "--border-bottom-width": "0px",
                      "--border-color": "rgba(0, 0, 0, 0)",
                      "--border-left-width": "0px",
                      "--border-right-width": "0px",
                      "--border-style": "solid",
                      "--border-top-width": "0px",
                      backgroundColor: "var(--token-b57a4573-ef01-446f-89ba-6fc5461bb54f, rgb(189, 238, 99))",
                      height: "100%",
                      borderBottomLeftRadius: "100px",
                      borderBottomRightRadius: "100px",
                      borderTopLeftRadius: "100px",
                      borderTopRightRadius: "100px",
                    }}
                  >
                    <div
                      className="framer-mb4s8"
                      data-framer-component-type="RichTextContainer"
                      style={{
                        "--extracted-r6o4lv": "var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17))",
                        "--framer-link-text-color": "rgb(0, 153, 255)",
                        "--framer-link-text-decoration": "underline",
                        transform: "none",
                      }}
                    >
                      <p
                        className="framer-text framer-styles-preset-1t46aaw"
                        data-styles-preset="YNEdw0Tqm"
                        dir="auto"
                        style={{
                          "--framer-text-alignment": "center",
                          "--framer-text-color": "var(--extracted-r6o4lv, var(--token-fcdd5164-bf55-48ca-a517-fc569e2d93cc, rgb(17, 17, 17)))",
                        }}
                      >
                        {hero.cta.label}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <main className="framer-mqsp36" data-framer-name="Main">
        <div className="framer-13xp4il" data-framer-name="Container">
          <div className="framer-10bpqqt hidden-z7j9wg hidden-j4joeo" data-framer-name="No">
            <div className="framer-dngr7v-container">
              <div className="framer-HEFZT framer-ybGf8 framer-10671zf framer-v-10671zf" data-framer-name="01" style={{ height: "100%", width: "100%" }}>
                <div
                  className="framer-17hjyi2"
                  data-framer-component-type="RichTextContainer"
                  style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}
                >
                  <p className="framer-text framer-styles-preset-19detod" data-styles-preset="x6Mmcqb50" dir="auto">
                    01
                  </p>
                </div>
                <div
                  className="framer-15yse5s"
                  data-framer-component-type="RichTextContainer"
                  style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "translateX(-50%)" }}
                >
                  <p className="framer-text framer-styles-preset-19detod" data-styles-preset="x6Mmcqb50" dir="auto">
                    02
                  </p>
                </div>
                <div
                  className="framer-1gskljd"
                  data-framer-component-type="RichTextContainer"
                  style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "translateX(-50%)" }}
                >
                  <p className="framer-text framer-styles-preset-19detod" data-styles-preset="x6Mmcqb50" dir="auto">
                    03
                  </p>
                </div>
                <div
                  className="framer-cv11yf"
                  data-framer-component-type="RichTextContainer"
                  style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}
                >
                  <p className="framer-text framer-styles-preset-19detod" data-styles-preset="x6Mmcqb50" dir="auto">
                    04
                  </p>
                </div>
                <div
                  className="framer-1uoulgf"
                  data-framer-component-type="RichTextContainer"
                  style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none" }}
                >
                  <p className="framer-text framer-styles-preset-19detod" data-styles-preset="x6Mmcqb50" dir="auto">
                    05
                  </p>
                </div>
              </div>
            </div>
            <div className="framer-zo9r4r" data-framer-name="Text Wrapper">
              <div className="framer-2qfiks" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p className="framer-text framer-styles-preset-1e0m3iw" data-styles-preset="wD8LD2XOT" dir="auto">
                  /{String(sections.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
          <div className="framer-2sbxu2" data-framer-name="Content">
            <div className="framer-1ddjeq1" data-framer-name="1" id="1">
              <div className="framer-14ccx2i" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <h2 className="framer-text framer-styles-preset-utpv99" data-styles-preset="RQbY5xsNc" dir="auto">
                  {first.heading}
                </h2>
              </div>
              <div className="framer-1w7zm3f" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                  {first.body}
                </p>
              </div>
            </div>
            <div className="framer-10ozkmu" data-framer-name="2" id="2">
              <div className="framer-1ccbdxr" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <h2 className="framer-text framer-styles-preset-utpv99" data-styles-preset="RQbY5xsNc" dir="auto">
                  {second.heading}
                </h2>
              </div>
              <div className="framer-1pp4r7l" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                  {second.body}
                </p>
              </div>
            </div>
            <div className="framer-mpmzfc" data-framer-name="3">
              <div className="framer-mdqbla" data-framer-name="Text Wrapper" id="3">
                <div className="framer-xenkyu" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <h2 className="framer-text framer-styles-preset-utpv99" data-styles-preset="RQbY5xsNc" dir="auto">
                    {third.heading}
                  </h2>
                </div>
                <div className="framer-1av5mcx" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                  <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                    {third.body}
                  </p>
                </div>
              </div>
              <div className="framer-1966xtl" data-framer-name="Images">
                <div className="ssr-variant">
                  <div className="framer-10lvkwb">
                    <div
                      style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}
                      data-framer-background-image-wrapper="true"
                    >
                      <OptimizedImage src={third.images[0].src} alt={third.images[0].alt} sizes="(min-width: 1200px) 40vw, (min-width: 810px) 50vw, 100vw" />
                    </div>
                  </div>
                </div>
                <div className="ssr-variant">
                  <div className="framer-1so5m1l">
                    <div
                      style={{ position: "absolute", borderRadius: "inherit", cornerShape: "inherit", top: "0", right: "0", bottom: "0", left: "0" }}
                      data-framer-background-image-wrapper="true"
                    >
                      <OptimizedImage src={third.images[1].src} alt={third.images[1].alt} sizes="(min-width: 1200px) 40vw, (min-width: 810px) 50vw, 100vw" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <section className="framer-i4i99z" data-framer-name="Work Experiences">
        <div className="framer-100pd12" data-framer-name="Container">
          <div className="framer-e6yk8w" data-framer-name="Header">
            <div className="framer-1kxe5of" data-framer-name="Text Wrapper">
              <div className="framer-v9rq3u" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto">
                  {experience.eyebrow}
                </p>
              </div>
            </div>
            <div className="framer-yh5kur" data-framer-name="Headline">
              <div className="framer-umsg1e" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <h2 className="framer-text framer-styles-preset-utpv99" data-styles-preset="RQbY5xsNc" dir="auto">
                  {experience.heading}
                </h2>
              </div>
            </div>
          </div>
          <div className="framer-1itpaxm" data-framer-name="Content">
            <div className="framer-1wxja96 hidden-j4joeo" data-framer-name="Header">
              <div className="framer-1t3n5qa" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p className="framer-text framer-styles-preset-1e0m3iw" data-styles-preset="wD8LD2XOT" dir="auto">
                  {experience.columns.role}
                </p>
              </div>
              <div className="framer-1yh0gxm" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p className="framer-text framer-styles-preset-1e0m3iw" data-styles-preset="wD8LD2XOT" dir="auto">
                  {experience.columns.organization}
                </p>
              </div>
              <div className="framer-x0lgq2" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                <p
                  className="framer-text framer-styles-preset-1e0m3iw"
                  data-styles-preset="wD8LD2XOT"
                  dir="auto"
                  style={{ "--framer-text-alignment": "right" }}
                >
                  {experience.columns.period}
                </p>
              </div>
            </div>
            <div className="framer-1f0117w hidden-j4joeo" data-framer-name="Divider"></div>
            {experience.items.map((item, index) => (
              <div className="about-experience-entry" data-about-experience={index === 0 ? "first" : undefined} key={`${item.role}-${item.period}`}>
                <h3 className="about-experience-entry__role">{item.role}</h3>
                <p className="about-experience-entry__company">{item.organization}</p>
                <p className="about-experience-entry__period">{item.period}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="framer-1ywqxfx-container">
        <link href="https://unpkg.com/lenis@1.3.23/dist/lenis.css" rel="stylesheet" />
      </div>
    </div>
  );
}
