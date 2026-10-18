import Link from 'next/link';
import OptimizedImage from '../OptimizedImage';
import { pages } from '../../content/site';
import { projects } from '../../content/projects';

const radius = (value) => ({ "borderBottomLeftRadius": value, "borderBottomRightRadius": value, "borderTopLeftRadius": value, "borderTopRightRadius": value });

// Per-breakpoint differences between the Framer card variants.
const CARD_VARIANTS = [
  { wrapper: 'ssr-variant hidden-1wf42sc hidden-1yvdmox', cardClass: 'framer-v-9vtu91', name: 'Desktop', radius: '40px' },
  { wrapper: 'ssr-variant hidden-15zouuu hidden-1yvdmox', cardClass: 'framer-v-kt95wo', name: 'Tablet', radius: '40px' },
  { wrapper: 'ssr-variant hidden-15zouuu hidden-1wf42sc', cardClass: 'framer-v-huh18u', name: 'Phone', radius: '24px' },
];

function ProjectCard({ project, variant }) {
  return (
    <div className={variant.wrapper}><div className="framer-an5py7-container"><Link className={`framer-A9KC2 framer-maPQ6 framer-9vtu91 ${variant.cardClass} framer-p865wr`} data-framer-name={variant.name} href={`/work/${project.slug}`} style={{ "width": "100%" }}><div className="framer-2ctex3" data-framer-name="Image Container" style={radius(variant.radius)}><div className="framer-qapzcu" style={{ "filter": "blur(0px)", "WebkitFilter": "blur(0px)" }}><div style={{ "position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0" }} data-framer-background-image-wrapper="true"><OptimizedImage src={project.image.src} alt={project.image.alt} sizes="(max-width: 809px) 100vw, 50vw" /></div></div></div><div className="framer-g3znh5" data-framer-name="Text Wrapper"><div className="framer-bnbp1d" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "transform": "none" }}><p className="framer-text framer-styles-preset-gpf141" data-styles-preset="TOwZA3g8K" dir="auto">{project.name}</p></div><div className="framer-18tel2b-container"><div className="framer-2T7Tu framer-kZscH framer-r7dCw framer-bfiwa4 framer-v-bfiwa4" data-framer-name="Large" style={{ "--1p5bjhd": "6px 12px 6px 12px", "backgroundColor": "var(--token-c06ac48a-21a8-4582-b3d6-9f37581073a1, rgb(247, 247, 247))", ...radius('100px') }}><div className="framer-1aav1cc" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--variable-reference-tcohuOKFO-ICt5de5ug)", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--variable-reference-tcohuOKFO-ICt5de5ug": "var(--token-e4c01179-4e7b-45a8-915a-d5bcd5f31dc2, rgb(51, 51, 51))", "transform": "none" }}><p className="framer-text framer-styles-preset-myvcqd" data-styles-preset="vnfdw_xAY" dir="auto" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--variable-reference-tcohuOKFO-ICt5de5ug))" }}>{project.category}</p></div></div></div></div></Link></div></div>
  );
}

// Framer's (invisible, absolutely positioned) loading spinner for the CMS list.
function LoadingIndicator() {
  return (
    <div className="ssr-variant"><div className="framer-1w9v5au-container"><div className="framer-8EaGQ framer-1hbo82m framer-v-1hbo82m" data-framer-name="Loading"><div className="framer-1qrc6yg" data-framer-name="Spinner" style={{ "mask": "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add", "WebkitMask": "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add", "willChange": "transform", "opacity": "0", "transform": "none" }}><div className="framer-1jivlv8" data-framer-name="Conic" style={{ "background": "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg)", "willChange": "transform", "opacity": "1", "transform": "none" }}><div className="framer-m7b4s7" data-framer-name="Round" style={{ "backgroundColor": "rgb(153, 153, 153)", ...radius('1px') }}></div></div></div></div></div></div>
  );
}

export default function WorkContent() {
  return (
    <div data-framer-root="" className="framer-QMauW framer-xIMGr framer-15zouuu" style={{ "minHeight": "100vh", "width": "auto", "display": "contents" }}><main className="framer-1nm2n8n" data-framer-name="Main"><div className="framer-126t6md" data-framer-name="Container"><div className="framer-mt5aqz" data-framer-component-type="RichTextContainer" style={{ "transform": "none" }}><h1 className="framer-text framer-styles-preset-1iszveu" data-styles-preset="BxrGaJblF" dir="auto" style={{ "--framer-text-alignment": "center" }}>{pages.work.heading}</h1></div><div className="framer-pweg4k">{projects.map((project) => CARD_VARIANTS.map((variant) => (
      <ProjectCard key={`${project.slug}-${variant.name}`} project={project} variant={variant} />
    )))}<LoadingIndicator /></div></div></main><div className="framer-1vny9e5-container"><link href="https://unpkg.com/lenis@1.3.23/dist/lenis.css" rel="stylesheet" /></div></div>
  );
}
