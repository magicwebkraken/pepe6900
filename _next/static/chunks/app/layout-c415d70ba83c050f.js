(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    2787: (e, t, l) => {
      "use strict";
      l.d(t, { Footer: () => d });
      var i = l(5155),
        s = l(1826),
        n = l(6766),
        a = l(9084),
        r = l(7615),
        o = l(2363),
        c = l(9809);
      function d() {
        let e = (0, c.U)("(max-width: 768px)");
        return (0, i.jsxs)("footer", {
          className:
            "relative mx-auto flex h-full w-full max-w-7xl flex-col items-center justify-center gap-5 px-5 pt-5 pb-5 lg:pt-20",
          children: [
            (0, i.jsx)("h1", {
              className:
                "font-unbounded text-center text-4xl font-bold lg:text-6xl",
              children: (0, i.jsx)(o.B, {
                once: !0,
                animation: "blurIn",
                delay: 0.2,
                by: e ? "word" : "character",
                children: "Join The PEPE6900 Cult!",
              }),
            }),
            (0, i.jsxs)("div", {
              className:
                "relative mt-10 grid w-full grid-cols-12 items-end rounded-3xl border-[4px] border-[#71B24C] bg-[#233E13]/50 lg:mt-20",
              children: [
                (0, i.jsx)(s.P.div, {
                  initial: { opacity: 0, scale: 0.5, rotate: 15 },
                  whileInView: { opacity: 1, scale: 1, rotate: 0 },
                  transition: {
                    delay: 0.4,
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                  },
                  viewport: { once: !0 },
                  className:
                    "absolute inset-0 top-0 left-10 z-0 hidden size-[20rem] rounded-full bg-[#659847] blur-3xl lg:block",
                }),
                (0, i.jsx)(s.P.div, {
                  initial: { opacity: 0, x: "-3rem", scale: 0.8, rotate: -10 },
                  whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
                  transition: {
                    delay: 0.4,
                    type: "spring",
                    stiffness: 120,
                    damping: 15,
                  },
                  viewport: { once: !0 },
                  className:
                    "absolute right-3 bottom-0 max-w-[8rem] lg:-bottom-1 lg:left-0 lg:max-w-[25rem]",
                  children: (0, i.jsx)(n.default, {
                    src: "/images/img-d.png",
                    alt: "d",
                    width: 1e3,
                    height: 1e3,
                    className: "max-w-[8rem] lg:max-w-[25rem]",
                  }),
                }),
                (0, i.jsx)("div", { className: "col-span-4 hidden lg:block" }),
                (0, i.jsx)("div", {
                  className:
                    "relative col-span-12 flex w-full flex-col gap-1 py-20 max-lg:px-5 lg:col-span-8 lg:pr-12",
                  children: (0, i.jsxs)("div", {
                    className: "mb-10 flex w-full flex-col gap-4 lg:mb-0",
                    children: [
                      (0, i.jsx)(s.P.h1, {
                        initial: {
                          opacity: 0,
                          y: "3rem",
                          scale: 0.8,
                          rotate: -5,
                        },
                        whileInView: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                        transition: {
                          delay: 0.4,
                          type: "spring",
                          stiffness: 100,
                          damping: 12,
                        },
                        viewport: { once: !0 },
                        className:
                          "font-unbounded text-4xl font-bold lg:text-[124px]",
                        children: "$PEPE6900",
                      }),
                      (0, i.jsxs)(s.P.div, {
                        initial: {
                          opacity: 0,
                          y: "3rem",
                          scale: 0.8,
                          rotate: 5,
                        },
                        whileInView: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                        transition: {
                          delay: 0.6,
                          type: "spring",
                          stiffness: 120,
                          damping: 15,
                        },
                        viewport: { once: !0 },
                        className:
                          "flex w-full gap-4 max-lg:flex-col lg:items-center lg:justify-between",
                        children: [
                          (0, i.jsx)("p", {
                            className: "lg:text-[32px]",
                            children: "You're not holding enough $PEPE6900!",
                          }),
                          " ",
                          (0, i.jsx)(r.$, {
                            className: "w-fit",
                            onClick: () => window.open(a.A.BUY_URL, "_blank"),
                            children: "Buy Now",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(s.P.div, {
              initial: { opacity: 0, y: "2rem" },
              whileInView: { opacity: 1, y: 0 },
              transition: {
                delay: 0.6,
                type: "spring",
                stiffness: 100,
                damping: 12,
              },
              viewport: { once: !0 },
              className: "flex w-full items-center justify-between",
              children: [
                (0, i.jsx)("button", {
                  className:
                    "hover:text-primary cursor-pointer transition-all duration-200",
                  onClick: () => window.open(a.A.X_URL, "_blank"),
                  children: (0, i.jsx)("svg", {
                    className: "size-4",
                    viewBox: "0 0 1200 1227",
                    children: (0, i.jsx)("path", {
                      fill: "currentColor",
                      d: "M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z",
                    }),
                  }),
                }),
                (0, i.jsx)("button", {
                  onClick: () =>
                    window.scrollTo({ top: 0, behavior: "smooth" }),
                  className:
                    "hover:text-primary text-foreground-secondary cursor-pointer transition-all duration-200",
                  children: "Back to top",
                }),
              ],
            }),
          ],
        });
      }
    },
    5433: (e, t, l) => {
      "use strict";
      l.d(t, { QueryProvider: () => o });
      var i = l(5155),
        s = l(432),
        n = l(6715),
        a = l(192),
        r = l(2115);
      function o(e) {
        let { children: t } = e,
          [l] = (0, r.useState)(
            () =>
              new s.E({
                defaultOptions: {
                  queries: { retry: 1, refetchOnWindowFocus: !1 },
                },
              })
          );
        return (0, i.jsxs)(n.Ht, {
          client: l,
          children: [t, (0, i.jsx)(a.E, { initialIsOpen: !1 })],
        });
      }
    },
    5685: (e, t, l) => {
      Promise.resolve().then(l.bind(l, 2787)),
        Promise.resolve().then(l.bind(l, 9577)),
        Promise.resolve().then(l.bind(l, 5433)),
        Promise.resolve().then(l.bind(l, 7699)),
        Promise.resolve().then(l.t.bind(l, 8511, 23));
    },
    8511: () => {},
    9577: (e, t, l) => {
      "use strict";
      l.d(t, { Header: () => c });
      var i = l(5155),
        s = l(1826),
        n = l(9084),
        a = l(7699),
        r = l(7615),
        o = l(3011);
      function c() {
        let { todayMentionCount: e } = (0, a.s)();
        return (0, i.jsxs)(s.P.div, {
          initial: { opacity: 0, y: "-2rem" },
          animate: { opacity: 1, y: 0 },
          transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 100,
            damping: 12,
          },
          className: "fixed top-0 z-50 w-full space-y-2",
          children: [
            (0, i.jsx)("header", {
              className:
                "bg-background flex h-[80px] w-full items-center justify-between",
              children: (0, i.jsxs)("nav", {
                className:
                  "mx-auto flex w-full max-w-7xl items-center justify-between gap-5 px-5",
                children: [
                  (0, i.jsx)("h1", {
                    className: "font-unbounded text-2xl font-black",
                    children: "PEPE6900",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "bg-primary-dark-2 font-unbounded items-center rounded-full px-4 py-3 font-bold max-lg:hidden",
                    children: [
                      "The word 6900 was said:",
                      " ",
                      (0, i.jsxs)("span", {
                        className: "text-primary",
                        children: [
                          "13.8M times",
                        ],
                      }),
                      " ",
                      "Today on X",
                    ],
                  }),
                  (0, i.jsx)("div", {
                    style: { display:'flex', alignItems: 'center', gap:10},
                    children: [
                      (0, i.jsx)(r.$, {
                        onClick: () => window.open("", "_blank"),
                        children: "Coingecko",
                      }),
                      (0, i.jsx)(r.$, {
                        onClick: () => window.open(n.A.BUY_URL, "_blank"),
                        children: "Buy $PEPE6900",
                      }),
                    ]
                  }),
                ],
              }),
            }),
            (0, i.jsxs)("div", {
              className:
                "bg-primary-dark-2 font-unbounded mx-5 items-center rounded-full px-2 py-3 text-center text-xs text-[10px] font-bold lg:hidden",
              children: [
                "The word 6900 was said:",
                " ",
                (0, i.jsxs)("span", {
                  className: "text-primary",
                  children: ["13.8M times",
                  ],
                }),
                " ",
                "Today on X",
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    e.O(0, [702, 398, 465, 360, 441, 964, 358], () => e((e.s = 5685))),
      (_N_E = e.O());
  },
]);
