import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  SVG,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "framer-motion";
import * as React from "react";
import { useRef } from "react";

// Re-export the downloaded component with unframer dependencies
// @ts-ignore
export { default } from "./FramerCharacter";
