import React from "react";
import { delay, motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { FaList } from "@/components/icons";
import { Brand } from "@/components/features";
import { ModeToggle } from "@/components/features/site/ModeToggle";
import { MenuItem } from "@/components/features/site/Navigation/DesktopMenu/MenuItem";
import { ToggleNavigationBtn } from "@/components/features/site/Navigation/shared/ToggleNavBtn";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n-config";

export default function MotionMobileNavigation({
  children,
  trigger,
  className: classNames,
  lang,
}: {
  children: React.ReactNode;
  trigger: boolean;
  className: string;
  lang: Locale;
}) {
  // Parent container animation
  const parentVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // Children animation
  const childVariants = {
    hidden: { opacity: 0, scale: 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.1, delay: 0.5, ease: "easeOut" },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        {...{ className: twMerge(`${classNames}`) }}
        initial="hidden"
        animate={trigger ? "visible" : "hidden"}
        variants={parentVariants}
      >
        <div className="flex items-center justify-between">
          <Brand lang={lang} />
          <ul className="flex items-start justify-center gap-3 text-xs font-medium">
            <MenuItem className="block">
              <ModeToggle />
            </MenuItem>
            <MenuItem className="max-md:block">
              <Button size="icon" variant="ghost">
                <FaList />
              </Button>
            </MenuItem>
            <MenuItem className="block md:hidden">
              <ToggleNavigationBtn />
            </MenuItem>
          </ul>
        </div>
        {React.Children.map(children, (child) => (
          <motion.div variants={childVariants} style={{ height: "100%" }}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
