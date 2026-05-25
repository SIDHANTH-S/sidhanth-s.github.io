'use client';
import React, { useRef } from "react";
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";

const useComponentViewport = () => ({ y: 0, height: 305, width: 200 });

const enabledGestures = {
  vL3UfqkJm: { hover: true, pressed: false, loading: false, error: false },
};
const serializationHash = "framer-2LhxO";
const variantClassNames = { vL3UfqkJm: "framer-v-1eoafg6" };

function addPropertyOverrides(overrides: any, ...variants: any[]) {
  const nextOverrides: any = {};
  variants?.forEach(
    (variant) => variant && Object.assign(nextOverrides, overrides[variant]),
  );
  return nextOverrides;
}

const transition1 = { bounce: 0, delay: 0, duration: 0.8, type: "spring" };

const Transition = ({ value, children }: any) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(
    () => ({ ...config, transition }),
    [config, transition],
  );
  return (
    <MotionConfigContext.Provider value={contextValue}>
      {children}
    </MotionConfigContext.Provider>
  );
};

const Variants = motion.create(React.Fragment);

const getProps = ({ author, height, id, image, title, width, logo, badge, ...props }: any) => {
  return {
    ...props,
    logo,
    badge,
    Le8H_AOyj: image ?? props.Le8H_AOyj ?? {
      src: "https://framerusercontent.com/images/JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg?scale-down-to=512",
    },
    qBUJ6yCfQ: author ?? props.qBUJ6yCfQ ?? "Walter Isaacson",
    SIkwxPXLT: title ?? props.SIkwxPXLT ?? "Steve Jobs",
  };
};

const createLayoutDependency = (props: any, variants: any[]) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};

const Component = React.forwardRef(function (props: any, ref: any) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();

  const {
    style, className, layoutId, variant,
    Le8H_AOyj, SIkwxPXLT, qBUJ6yCfQ, logo, badge,
    ...restProps
  } = getProps(props);

  const {
    baseVariant, classNames, gestureHandlers,
    gestureVariant, setVariant, variants,
  } = useVariantState({
    defaultVariant: "vL3UfqkJm",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames,
    cycleOrder: ["vL3UfqkJm"],
  }) as any;

  const layoutDependency = createLayoutDependency(props, variants);
  const scopingClassNames = cx(serializationHash);

  const isCert = !!(logo || badge);
  const isResume = SIkwxPXLT === "Resume";
  const isEdxCert = qBUJ6yCfQ === "Harvard University" || SIkwxPXLT.includes("CS50");
  const certHeadingColor = isEdxCert ? "#02262B" : qBUJ6yCfQ === "Oracle" ? "#C74634" : "#81B033";
  const certTitleColor = isEdxCert ? "#02262B" : "#111111";
  const imgSrc = typeof Le8H_AOyj === "object" ? Le8H_AOyj.src : Le8H_AOyj;

  return (
    <LayoutGroup id={layoutId ?? defaultLayoutId}>
      <Variants animate={variants} initial={false}>
        <Transition value={transition1}>
          <motion.div
            {...restProps}
            {...gestureHandlers}
            className={cx(scopingClassNames, "framer-1eoafg6", className, classNames)}
            data-framer-name="Variant 1"
            layoutDependency={layoutDependency}
            layoutId="vL3UfqkJm"
            ref={refBinding}
            style={{
              boxShadow: "0px 0.7px 0.7px -0.625px rgba(0,0,0,0), 0px 1.8px 1.8px -1.25px rgba(0,0,0,0), 0px 30px 30px -3.75px rgba(0,0,0,0)",
              ...style,
            }}
            variants={{
              "vL3UfqkJm-hover": {
                boxShadow: "0px 0.7px 0.7px -0.625px rgba(0,0,0,0.44), 0px 1.8px 1.8px -1.25px rgba(0,0,0,0.43), 0px 30px 30px -3.75px rgba(0,0,0,0.15)",
              },
            }}
            {...addPropertyOverrides(
              { "vL3UfqkJm-hover": { "data-framer-name": undefined } },
              baseVariant,
              gestureVariant,
            )}
          >
            <motion.div
              className="framer-69i0pq"
              data-framer-name="Book"
              layoutDependency={layoutDependency}
              layoutId="q4liodaOV"
              style={{ transformPerspective: 1200, z: 0 }}
              variants={{ "vL3UfqkJm-hover": { originX: 1, z: 50 } }}
            >
              {/* Paper / Back face */}
              <motion.div
                className="framer-13l13wi"
                data-framer-name="Paper"
                layoutDependency={layoutDependency}
                layoutId="TKQ6LGJks"
                style={{
                  background: "linear-gradient(239deg, rgb(255,255,255) 0%, rgb(224,224,224) 100%)",
                  z: -10,
                  padding: isResume ? "0px" : "30px",
                }}
              >
                {isResume && (
                  <iframe
                    src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&pagemode=none&page=1"
                    width="100%"
                    height="100%"
                    style={{ border: "none", pointerEvents: "none", background: "white", display: "block" }}
                    title="Resume"
                  />
                )}
                {isCert && (
                  <>
                    <div style={{ textAlign: "center", color: certHeadingColor, fontSize: "10px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>
                      {qBUJ6yCfQ}
                    </div>
                    <div style={{ textAlign: "center", color: certTitleColor, fontSize: qBUJ6yCfQ === "Oracle" ? "15px" : "20px", fontWeight: 800, lineHeight: "1.15", whiteSpace: "pre-wrap" }}>
                      {SIkwxPXLT}
                    </div>
                  </>
                )}
              </motion.div>

              {/* Cover / Front face */}
              <motion.div
                className="framer-18o8o6w"
                data-framer-name="Cover"
                layoutDependency={layoutDependency}
                layoutId="N3KtLhEqA"
                style={{ rotateY: 0, z: 0 }}
                variants={{
                  "vL3UfqkJm-hover": {
                    originX: 0,
                    rotateY: isResume ? -70 : -80,
                    z: 10,
                  },
                }}
              >
                {!isCert ? (
                  <div
                    data-framer-name="Cover"
                    style={{ position: "absolute", inset: 0, backgroundColor: "#e8e4dc", overflow: "hidden" }}
                  >
                    {/* Portrait */}
                    <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${imgSrc})`, backgroundSize: "cover", backgroundPosition: "center 0%", backgroundRepeat: "no-repeat", zIndex: 0 }} />
                    {/* Gradient */}
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(10,10,20,0.88) 100%)", zIndex: 1 }} />
                    {/* ESTD */}
                    <div style={{ position: "absolute", top: "9%", left: "8%", zIndex: 2, color: "#1a1a2e", fontSize: "7px", fontFamily: "Georgia, serif", letterSpacing: "0.1em", lineHeight: 1.5, fontWeight: 600 }}>
                      <div>ESTD.</div>
                      <div>2005</div>
                    </div>
                    {/* Monogram */}
                    <div style={{ position: "absolute", top: "8%", right: "8%", zIndex: 2, color: "#1a1a2e", fontSize: "13px", fontFamily: "Georgia, serif", fontWeight: 700 }}>
                      S.05
                    </div>
                    {/* Role tags */}
                    <div style={{ position: "absolute", top: "53%", left: "8%", zIndex: 2, color: "#1a1a2e", fontSize: "4px", fontFamily: "Georgia, serif", letterSpacing: "0.12em", lineHeight: 1.9 }}>
                      <div>IDEAS</div>
                      <div>SYSTEMS</div>
                      <div>EXECUTION</div>
                    </div>
                    {/* Name */}
                    <div style={{ position: "absolute", bottom: "18%", left: 0, right: 0, zIndex: 2, textAlign: "center", color: "rgba(255,255,255,0.92)", fontSize: "19px", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400, letterSpacing: "0.22em", textShadow: "0 2px 10px rgba(0,0,0,0.45)" }}>
                      SIDHANTH S
                    </div>
                    {/* Divider */}
                    <div style={{ position: "absolute", bottom: "13%", left: "10%", right: "10%", zIndex: 2, display: "flex", alignItems: "center", gap: "4px" }}>
                      <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.5)" }} />
                      <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,0.8)" }} />
                      <div style={{ flex: 1, height: "0.5px", background: "rgba(255,255,255,0.5)" }} />
                    </div>
                    {/* Tagline */}
                    <div style={{ position: "absolute", bottom: "8%", left: 0, right: 0, zIndex: 2, textAlign: "center", color: "rgba(255,255,255,0.7)", fontSize: "5.5px", fontFamily: "Georgia, serif", letterSpacing: "0.22em" }}>
                      RESUME & SELECTED WORKS
                    </div>
                  </div>
                ) : (
                  <div
                    className="framer-19jpaxx"
                    style={{
                      background: isEdxCert ? "#02262B" : qBUJ6yCfQ === "Oracle" ? "#4a1020" : "#032d42",
                      width: "100%",
                      height: "100%",
                      borderLeft: `6px solid ${isEdxCert ? "#ffffff" : qBUJ6yCfQ === "Oracle" ? "#c7c7c7" : "#81B033"}`,
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: badge || isEdxCert ? "flex-start" : "center",
                      padding: "15% 10%",
                    }}
                  >
                    {logo && (
                      typeof logo === "string" ? (
                        <img
  src={logo}
  alt={`${SIkwxPXLT} certificate badge`}
  style={{
    width: isEdxCert ? "72%" : "60%",
    display: "block",
    margin: "0 auto",
    zIndex: 10,
    pointerEvents: "none",
    marginBottom: badge || isEdxCert ? "15%" : "0",
  }}
/>
                      ) : (
                        <div style={{ width: isEdxCert ? "72%" : "60%", zIndex: 10, pointerEvents: "none", marginBottom: badge || isEdxCert ? "15%" : "0", display: "flex", justifyContent: "center", alignItems: "center" }}>
                          {logo}
                        </div>
                      )
                    )}
                    {badge && (
                      <img
  src={badge}
  alt={`${SIkwxPXLT} certificate badge`}
  style={
    isEdxCert
      ? {
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "130px",
          zIndex: 10,
          pointerEvents: "none",
        }
      : qBUJ6yCfQ === "Oracle"
        ? {
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "170px",
            zIndex: 10,
            pointerEvents: "none",
          }
        : {
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "120px",
            zIndex: 10,
            pointerEvents: "none",
          }
  }
/>
                    )}
                  </div>
                )}

                {/* Light overlays */}
                <motion.div
                  className="framer-xdvehx"
                  layoutDependency={layoutDependency}
                  layoutId="fGZHS9_SB"
                  style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(255,255,255,0.1) 23%, rgba(0,0,0,0.4) 40%, rgba(255,255,255,0.2) 48%, rgba(255,255,255,0) 100%)", width: "12px", zIndex: 6 }}
                />
                <motion.div
                  className="framer-1cnzc01"
                  layoutDependency={layoutDependency}
                  layoutId="WPHWMy5CY"
                  style={{ background: "linear-gradient(38deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)", zIndex: 6 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </Transition>
      </Variants>
    </LayoutGroup>
  );
});
Component.displayName = "BookComponent";

const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-2LhxO.framer-1eoafg6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 305px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 200px; }",
  ".framer-2LhxO .framer-69i0pq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 1px; }",
  ".framer-2LhxO .framer-13l13wi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 100%; z-index: 0; }",
  ".framer-2LhxO .framer-18o8o6w { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
  ".framer-2LhxO .framer-19jpaxx { aspect-ratio: 0.6564992961051149 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 305px); overflow: visible; position: relative; width: 1px; }",
  ".framer-2LhxO .framer-xdvehx { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 18px; z-index: 1; }",
  ".framer-2LhxO .framer-1cnzc01 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }",
  ".framer-2LhxO.framer-v-1eoafg6.hover .framer-13l13wi { order: 1; }",
  ".framer-2LhxO.framer-v-1eoafg6.hover .framer-18o8o6w { left: 1px; order: 0; right: -1px; }",
];

const FramerLmy5fz81C: any = withCSS(Component, css, "framer-2LhxO");
export default FramerLmy5fz81C;
FramerLmy5fz81C.displayName = "Book";
FramerLmy5fz81C.defaultProps = { height: 305, width: 200 };

addPropertyControls(FramerLmy5fz81C, {
  Le8H_AOyj: { __defaultAssetReference: "data:framer/asset-reference,JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg?originalFilename=71sVQDj0SCL.jpg&preferredSize=auto", title: "Image", type: ControlType.ResponsiveImage },
  SIkwxPXLT: { defaultValue: "Steve Jobs", displayTextArea: false, title: "Title", type: ControlType.String },
  qBUJ6yCfQ: { defaultValue: "Walter Isaacson", displayTextArea: false, title: "Author", type: ControlType.String },
});

addFonts(FramerLmy5fz81C, [{ explicitInter: true, fonts: [] }], { supportsExplicitInterCodegen: true });
