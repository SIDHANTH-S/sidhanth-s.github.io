import * as React from "react";
import { useRef } from "react";

import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  Image,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "unframer";
// @ts-ignore
const getLoadingLazyAtYPosition = (y: any) => "lazy";
// @ts-ignore
// @ts-ignore
const RichText = ({
  text,
  withExternalLayout,
  __fromCanvasComponent,
  parentSize,
  providedWindow,
  ...props
}: any) => React.createElement("div", props, text);
// @ts-ignore
const useComponentViewport = () => ({ y: 0, height: 305, width: 200 });

import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
const enabledGestures = {
  vL3UfqkJm: { hover: true, pressed: false, loading: false, error: false },
};
const serializationHash = "framer-2LhxO";
const variantClassNames = { vL3UfqkJm: "framer-v-1eoafg6" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants?.forEach(
    (variant) => variant && Object.assign(nextOverrides, overrides[variant]),
  );
  return nextOverrides;
}
const transition1 = { bounce: 0, delay: 0, duration: 0.8, type: "spring" };
const toResponsiveImage = (value) => {
  if (
    typeof value === "object" &&
    value !== null &&
    typeof value.src === "string"
  ) {
    return value;
  }
  return typeof value === "string" ? { src: value } : undefined;
};
const Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(
    () => ({ ...config, transition }),
    [JSON.stringify(transition)],
  );
  return /*#__PURE__*/ _jsx(MotionConfigContext.Provider, {
    value: contextValue,
    children: children,
  });
};
const Variants = motion.create(React.Fragment);
const getProps = ({
  author,
  height,
  id,
  image,
  title,
  width,
  logo,
  badge,
  ...props
}) => {
  return {
    ...props,
    logo,
    badge,
    Le8H_AOyj: image ??
      props.Le8H_AOyj ?? {
        pixelHeight: 2131,
        pixelWidth: 1399,
        src: "https://framerusercontent.com/images/JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg?scale-down-to=512",
        srcSet:
          "https://framerusercontent.com/images/JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg?scale-down-to=1024 672w,https://framerusercontent.com/images/JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg?scale-down-to=2048 1344w,https://framerusercontent.com/images/JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg 1399w",
      },
    qBUJ6yCfQ: author ?? props.qBUJ6yCfQ ?? "Walter Isaacson",
    SIkwxPXLT: title ?? props.SIkwxPXLT ?? "Steve Jobs",
  };
};
const createLayoutDependency = (props, variants) => {
  if (props.layoutDependency)
    return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
const Component = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  const fallbackRef = useRef(null);
  const refBinding = ref ?? fallbackRef;
  const defaultLayoutId = React.useId();
  const { activeLocale, setLocale } = useLocaleInfo();
  const componentViewport = useComponentViewport();
  const {
    style,
    className,
    layoutId,
    variant,
    Le8H_AOyj,
    SIkwxPXLT,
    qBUJ6yCfQ,
    logo,
    badge,
    ...restProps
  } = getProps(props) as any;
  const {
    baseVariant,
    classNames,
    gestureHandlers,
    gestureVariant,
    setVariant,
    variants,
  } = useVariantState({
    defaultVariant: "vL3UfqkJm",
    enabledGestures,
    ref: refBinding,
    variant,
    variantClassNames,
    cycleOrder: ["vL3UfqkJm"],
  }) as any;
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);

  const isCert = !!(logo || badge);
  const isResume = SIkwxPXLT === "Resume";
  const isEdxCert =
    qBUJ6yCfQ === "Harvard University" || SIkwxPXLT.includes("CS50");
  const certHeadingColor = isEdxCert
    ? "#02262B"
    : qBUJ6yCfQ === "Oracle"
      ? "#C74634"
      : "#81B033";
  const certTitleColor = isEdxCert
    ? "#02262B"
    : qBUJ6yCfQ === "Oracle"
      ? "#111111"
      : "#111111";

  return /*#__PURE__*/ _jsx(LayoutGroup, {
    id: layoutId ?? defaultLayoutId,
    children: /*#__PURE__*/ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /*#__PURE__*/ _jsx(Transition, {
        value: transition1,
        children: /*#__PURE__*/ _jsx(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(
            scopingClassNames,
            "framer-1eoafg6",
            className,
            classNames,
          ),
          "data-framer-name": "Variant 1",
          layoutDependency: layoutDependency,
          layoutId: "vL3UfqkJm",
          ref: refBinding,
          style: {
            boxShadow:
              "0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0), 0px 30px 30px -3.75px rgba(0, 0, 0, 0)",
            ...style,
          },
          variants: {
            "vL3UfqkJm-hover": {
              boxShadow:
                "0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.44), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.43), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.41), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.38), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.31), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.15)",
            },
          },
          ...addPropertyOverrides(
            { "vL3UfqkJm-hover": { "data-framer-name": undefined } },
            baseVariant,
            gestureVariant,
          ),
          children: /*#__PURE__*/ _jsxs(motion.div, {
            className: "framer-69i0pq",
            "data-framer-name": "Book",
            layoutDependency: layoutDependency,
            layoutId: "q4liodaOV",
            style: { transformPerspective: 1200, z: 0 },
            variants: { "vL3UfqkJm-hover": { originX: 1, z: 50 } },
            children: [
              /*#__PURE__*/ _jsxs(motion.div, {
                className: "framer-13l13wi",
                "data-framer-name": "Paper",
                layoutDependency: layoutDependency,
                layoutId: "TKQ6LGJks",
                style: {
                  background:
                    "linear-gradient(239deg, rgb(255, 255, 255) 0%, rgb(224, 224, 224) 100%)",
                  z: -10,
                  padding: isResume ? "0px" : "30px",
                },
                children: [
                  isResume
                    ? /*#__PURE__*/ _jsx("iframe", {
                        src: "/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH&pagemode=none&page=1",
                        width: "100%",
                        height: "100%",
                        style: {
                          border: "none",
                          pointerEvents: "none",
                          background: "white",
                          display: "block",
                        },
                        title: "Resume",
                      })
                    : null,
                  isCert
                    ? /*#__PURE__*/ _jsxs(React.Fragment, {
                        children: [
                          /*#__PURE__*/ _jsx("div", {
                            style: {
                              textAlign: "center",
                              color: certHeadingColor,
                              fontSize: "10px",
                              fontWeight: "bold",
                              textTransform: "uppercase",
                              letterSpacing: "0.1em",
                              marginBottom: "6px",
                            },
                            children: qBUJ6yCfQ,
                          }),
                          /*#__PURE__*/ _jsx("div", {
                            style: {
                              textAlign: "center",
                              color: certTitleColor,
                              fontSize:
                                qBUJ6yCfQ === "Oracle" ? "15px" : "20px",
                              fontWeight: 800,
                              lineHeight: "1.15",
                              whiteSpace: "pre-wrap",
                            },
                            children: SIkwxPXLT,
                          }),
                        ],
                      })
                    : null,
                  !isCert && !isResume
                    ? /*#__PURE__*/ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            style: {
                              "--font-selector": "SW50ZXItQm9sZA==",
                              "--framer-font-family":
                                '"Inter", "Inter Placeholder", sans-serif',
                              "--framer-font-size": "20px",
                              "--framer-font-weight": "700",
                              "--framer-text-alignment": "center",
                            },
                            children: SIkwxPXLT,
                          }),
                        }),
                        className: "framer-31lhx8",
                        fonts: ["Inter-Bold"],
                        layoutDependency: layoutDependency,
                        layoutId: "PEm5RXy4L",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                        },
                        text: SIkwxPXLT,
                        verticalAlignment: "top",
                        withExternalLayout: true,
                      })
                    : null,
                  !isCert && !isResume
                    ? /*#__PURE__*/ _jsx(RichText, {
                        __fromCanvasComponent: true,
                        children: /*#__PURE__*/ _jsx(React.Fragment, {
                          children: /*#__PURE__*/ _jsx(motion.p, {
                            style: {
                              "--framer-font-size": "12px",
                              "--framer-text-alignment": "center",
                            },
                            children: qBUJ6yCfQ,
                          }),
                        }),
                        className: "framer-102s078",
                        fonts: ["Inter"],
                        layoutDependency: layoutDependency,
                        layoutId: "JyzlY4VDW",
                        style: {
                          "--framer-link-text-color": "rgb(0, 153, 255)",
                          "--framer-link-text-decoration": "underline",
                          opacity: 0.3,
                        },
                        text: qBUJ6yCfQ,
                        verticalAlignment: "top",
                        withExternalLayout: true,
                      })
                    : null,
                ],
              }),
              /*#__PURE__*/ _jsxs(motion.div, {
                className: "framer-18o8o6w",
                "data-framer-name": "Cover",
                layoutDependency: layoutDependency,
                layoutId: "N3KtLhEqA",
                style: { rotateY: 0, z: 0 },
                variants: {
                  "vL3UfqkJm-hover": {
                    originX: 0,
                    rotateY: isResume ? -70 : -80,
                    z: 10,
                  },
                },
                children: [
                  !isCert
                    ? /*#__PURE__*/ _jsxs("div", {
                        "data-framer-name": "Cover",
                        style: {
                          position: "absolute",
                          inset: 0,
                          backgroundColor: "#e8e4dc",
                          overflow: "hidden",
                        },
                        children: [
                          _jsx("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              backgroundImage: `url(${typeof Le8H_AOyj === "object" ? Le8H_AOyj.src : Le8H_AOyj})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center 0%",
                              backgroundRepeat: "no-repeat",
                              zIndex: 0,
                            },
                          }),

                          _jsx("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              background:
                                "linear-gradient(to bottom, transparent 40%, rgba(10,10,20,0.88) 100%)",
                              zIndex: 1,
                            },
                          }),

                          _jsxs("div", {
                            style: {
                              position: "absolute",
                              inset: 0,
                              zIndex: 2,
                              transform: "translateY(-8px) scale(1.08)",
                              transformOrigin: "center center",
                            },
                            children: [
                              _jsxs("div", {
                                style: {
                                  position: "absolute",
                                  top: "9%",
                                  left: "8%",
                                  color: "#1a1a2e",
                                  fontSize: "7px",
                                  fontFamily: "Georgia, serif",
                                  letterSpacing: "0.1em",
                                  lineHeight: 1.5,
                                  fontWeight: 600,
                                },
                                children: [
                                  _jsx("div", { children: "ESTD." }),
                                  _jsx("div", { children: "2005" }),
                                ],
                              }),

                              _jsx("div", {
                                style: {
                                  position: "absolute",
                                  top: "8%",
                                  right: "8%",
                                  color: "#1a1a2e",
                                  fontSize: "13px",
                                  fontFamily: "Georgia, serif",
                                  fontWeight: 700,
                                },
                                children: "S.05",
                              }),

                              _jsxs("div", {
                                style: {
                                  position: "absolute",
                                  top: "53%",
                                  left: "8%",
                                  color: "#1a1a2e",
                                  fontSize: "4px",
                                  fontFamily: "Georgia, serif",
                                  letterSpacing: "0.12em",
                                  lineHeight: 1.9,
                                },
                                children: [
                                  _jsx("div", { children: "IDEAS" }),
                                  _jsx("div", { children: "SYSTEMS" }),
                                  _jsx("div", { children: "EXECUTION" }),
                                ],
                              }),

                              _jsx("div", {
                                style: {
                                  position: "absolute",
                                  bottom: "18%",
                                  left: 0,
                                  right: 0,
                                  textAlign: "center",
                                  color: "rgba(255,255,255,0.92)",
                                  fontSize: "19px",
                                  fontFamily:
                                    "Georgia, 'Times New Roman', serif",
                                  fontWeight: 400,
                                  letterSpacing: "0.22em",
                                  textShadow: "0 2px 10px rgba(0,0,0,0.45)",
                                },
                                children: "SIDHANTH S",
                              }),

                              _jsxs("div", {
                                style: {
                                  position: "absolute",
                                  bottom: "13%",
                                  left: "10%",
                                  right: "10%",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px",
                                },
                                children: [
                                  _jsx("div", {
                                    style: {
                                      flex: 1,
                                      height: "0.5px",
                                      background: "rgba(255,255,255,0.5)",
                                    },
                                  }),
                                  _jsx("div", {
                                    style: {
                                      width: "3px",
                                      height: "3px",
                                      borderRadius: "50%",
                                      background: "rgba(255,255,255,0.8)",
                                    },
                                  }),
                                  _jsx("div", {
                                    style: {
                                      flex: 1,
                                      height: "0.5px",
                                      background: "rgba(255,255,255,0.5)",
                                    },
                                  }),
                                ],
                              }),

                              _jsx("div", {
                                style: {
                                  position: "absolute",
                                  bottom: "8%",
                                  left: 0,
                                  right: 0,
                                  textAlign: "center",
                                  color: "rgba(255,255,255,0.7)",
                                  fontSize: "5.5px",
                                  fontFamily: "Georgia, serif",
                                  letterSpacing: "0.22em",
                                },
                                children: "RESUME & SELECTED WORKS",
                              }),
                            ],
                          }),
                        ],
                      })
                    : /*#__PURE__*/ _jsxs("div", {
                        className: "framer-19jpaxx",
                        style: {
                          background: isEdxCert
                            ? "#02262B"
                            : qBUJ6yCfQ === "Oracle"
                              ? "#4a1020"
                              : qBUJ6yCfQ === "Harvard"
                                ? "#111111"
                                : "#032d42",
                          width: "100%",
                          height: "100%",
                          borderLeft: `6px solid ${isEdxCert ? "#ffffff" : qBUJ6yCfQ === "Oracle" ? "#c7c7c7" : qBUJ6yCfQ === "Harvard" ? "#A51C30" : "#81B033"}`,
                          position: "relative",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent:
                            badge || isEdxCert ? "flex-start" : "center",
                          padding: "15% 10%",
                        },
                        children: [
                          logo &&
                            (typeof logo === "string"
                              ? /*#__PURE__*/ _jsx("img", {
                                  src: logo,
                                  style: {
                                    width: isEdxCert ? "72%" : "60%",
                                    display: "block",
                                    margin: "0 auto",
                                    zIndex: 10,
                                    pointerEvents: "none",
                                    marginBottom:
                                      badge || isEdxCert ? "15%" : "0",
                                  },
                                })
                              : /*#__PURE__*/ _jsx("div", {
                                  style: {
                                    width: isEdxCert ? "72%" : "60%",
                                    zIndex: 10,
                                    pointerEvents: "none",
                                    marginBottom:
                                      badge || isEdxCert ? "15%" : "0",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  },
                                  children: logo,
                                })),
                          badge &&
                            /*#__PURE__*/ _jsx("img", {
                              src: badge,
                              style: isEdxCert
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
                                    },
                            }),
                        ],
                      }),
                  /*#__PURE__*/ _jsx(motion.div, {
                    className: "framer-xdvehx",
                    "data-framer-name": "Lights",
                    layoutDependency: layoutDependency,
                    layoutId: "fGZHS9_SB",
                    style: {
                      background:
                        "linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0.1) 23%, rgba(0, 0, 0, 0.4) 40%, rgba(255, 255, 255, 0.2) 48%, rgba(255, 255, 255, 0) 100%)",
                      width: "12px",
                      zIndex: 6,
                    },
                  }),
                  /*#__PURE__*/ _jsx(motion.div, {
                    className: "framer-1cnzc01",
                    "data-framer-name": "Lights",
                    layoutDependency: layoutDependency,
                    layoutId: "WPHWMy5CY",
                    style: {
                      background:
                        "linear-gradient(38deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
                      zIndex: 6,
                    },
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
    }),
  });
});
const css = [
  "@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
  ".framer-2LhxO.framer-ea1tcq, .framer-2LhxO .framer-ea1tcq { display: block; }",
  ".framer-2LhxO.framer-1eoafg6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 305px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 200px; }",
  ".framer-2LhxO .framer-69i0pq { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; transform-style: preserve-3d; width: 1px; }",
  ".framer-2LhxO .framer-13l13wi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 30px; position: relative; width: 100%; z-index: 0; }",
  ".framer-2LhxO .framer-31lhx8, .framer-2LhxO .framer-102s078 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }",
  ".framer-2LhxO .framer-18o8o6w { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; justify-content: center; left: 0px; overflow: hidden; padding: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }",
  ".framer-2LhxO .framer-19jpaxx { aspect-ratio: 0.6564992961051149 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 305px); overflow: visible; position: relative; width: 1px; }",
  ".framer-2LhxO .framer-xdvehx { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; top: 0px; width: 18px; z-index: 1; }",
  ".framer-2LhxO .framer-1cnzc01 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; z-index: 1; }",
  ".framer-2LhxO.framer-v-1eoafg6.hover .framer-13l13wi { order: 1; }",
  ".framer-2LhxO.framer-v-1eoafg6.hover .framer-18o8o6w { left: 1px; order: 0; right: -1px; }",
];
/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 305
 * @framerIntrinsicWidth 200
 * @framerCanvasComponentVariantDetails {"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ZTzf57uUM":{"layout":["fixed","fixed"]}}}
 * @framerVariables {"Le8H_AOyj":"image","SIkwxPXLT":"title","qBUJ6yCfQ":"author"}
 * @framerImmutableVariables true
 * @framerDisplayContentsDiv false
 * @framerAutoSizeImages true
 * @framerComponentViewportWidth true
 * @framerColorSyntax true
 */ const FramerLmy5fz81C = withCSS(Component, css, "framer-2LhxO");
export default FramerLmy5fz81C;
FramerLmy5fz81C.displayName = "Book";
FramerLmy5fz81C.defaultProps = { height: 305, width: 200 };
addPropertyControls(FramerLmy5fz81C, {
  Le8H_AOyj: {
    __defaultAssetReference:
      "data:framer/asset-reference,JXL9OqyS9HXAxdkH6ZGIV5PQXQQ.jpg?originalFilename=71sVQDj0SCL.jpg&preferredSize=auto",
    title: "Image",
    type: ControlType.ResponsiveImage,
  },
  SIkwxPXLT: {
    defaultValue: "Steve Jobs",
    displayTextArea: false,
    title: "Title",
    type: ControlType.String,
  },
  qBUJ6yCfQ: {
    defaultValue: "Walter Isaacson",
    displayTextArea: false,
    title: "Author",
    type: ControlType.String,
  },
});
addFonts(
  FramerLmy5fz81C,
  [
    {
      explicitInter: true,
      fonts: [
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2",
          weight: "700",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
          url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
          url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+1F00-1FFF",
          url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange: "U+0370-03FF",
          url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
          url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
          url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
          weight: "400",
        },
        {
          family: "Inter",
          source: "framer",
          style: "normal",
          unicodeRange:
            "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
          url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
          weight: "400",
        },
      ],
    },
  ],
  { supportsExplicitInterCodegen: true },
);
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "FramerLmy5fz81C",
      slots: [],
      annotations: {
        framerVariables:
          '{"Le8H_AOyj":"image","SIkwxPXLT":"title","qBUJ6yCfQ":"author"}',
        framerIntrinsicHeight: "305",
        framerIntrinsicWidth: "200",
        framerContractVersion: "1",
        framerAutoSizeImages: "true",
        framerColorSyntax: "true",
        framerDisplayContentsDiv: "false",
        framerCanvasComponentVariantDetails:
          '{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"ZTzf57uUM":{"layout":["fixed","fixed"]}}}',
        framerComponentViewportWidth: "true",
        framerImmutableVariables: "true",
      },
    },
    Props: { type: "tsType", annotations: { framerContractVersion: "1" } },
    __FramerMetadata__: { type: "variable" },
  },
};
