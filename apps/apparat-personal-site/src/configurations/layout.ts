type ResurgamLayoutInputPropsType = {
  layoutExpanded?: boolean;
};

export const RESURGAM = {
  SITE_HEADER: ({ layoutExpanded }: ResurgamLayoutInputPropsType) => [
    // "transition-resurgam duration-500",
    // layoutExpanded ? "resurgam:w-[85vw]" : "resurgam:w-[65vw]",
    "resurgam:w-[65vw]"
  ],
  NOTEBOOK_BINDER_HOLES: ({ layoutExpanded }: ResurgamLayoutInputPropsType) => [
    // "transition-resurgam duration-500",
    // layoutExpanded ? "left-[10vw]" : "left-[30vw]",
    "left-[30vw]"
  ],
  SIDE_PANEL: ({ layoutExpanded }: ResurgamLayoutInputPropsType) => [
    // "transition-resurgam duration-500",
    // layoutExpanded ? "min-w-[10vw]" : "min-w-[30vw]",
    "w-[30vw]"
  ],
  CONTENT_PANEL: ({ layoutExpanded }: ResurgamLayoutInputPropsType) => [
    // "transition-resurgam duration-500",
    // layoutExpanded
    //   ? "resurgam:max-w-[85vw] ml-0 resurgam:ml-[15vw]"
    //   : "resurgam:max-w-[65vw] ml-0 resurgam:ml-[35vw]",
    "resurgam:max-w-[65vw] ml-0 resurgam:ml-[35vw]",
  ],
};
