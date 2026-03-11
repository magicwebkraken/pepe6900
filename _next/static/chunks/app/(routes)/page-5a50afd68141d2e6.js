(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [122],
  {
    1922: (e, a, t) => {
      "use strict";
      t.d(a, { Meme: () => x });
      var s = t(5155),
        i = t(9084),
        l = t(7699),
        n = t(1826),
        r = t(6766),
        o = t(7615),
        c = t(2363),
        d = t(3011),
        m = t(9809);
      function x() {
        let { todayMentionCount: e } = (0, l.s)(),
          a = (0, m.U)("(max-width: 768px)");
        return (0, s.jsxs)("section", {
          id: "meme",
          className:
            "relative flex h-full min-h-screen w-full flex-col items-center justify-center gap-32 py-32 lg:gap-40",
          children: [
            (0, s.jsxs)(n.P.div, {
              initial: { opacity: 0, scale: 1.1 },
              viewport: { once: !0 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { duration: 0.4, delay: 0.2 },
              className:
                "absolute z-0 h-full max-h-[60%] w-full overflow-hidden",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "absolute top-0 left-0 z-0 h-[200px] w-full bg-gradient-to-b from-black to-transparent",
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute bottom-0 left-0 z-0 h-[200px] w-full bg-gradient-to-t from-black to-transparent",
                }),
                (0, s.jsx)(r.default, {
                  src: "/images/img-stats.png",
                  alt: "Meme",
                  width: 1e3,
                  height: 1e3,
                  className: "size-full object-cover",
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "relative z-10 flex items-center gap-16 max-lg:flex-col max-lg:px-5",
              children: [
                (0, s.jsxs)("div", {
                  className: "relative",
                  children: [
                    (0, s.jsx)(n.P.div, {
                      initial: {
                        opacity: 0,
                        y: "3rem",
                        rotate: -15,
                        scale: 0.8,
                      },
                      viewport: { once: !0 },
                      whileInView: { opacity: 1, y: 0, rotate: 0, scale: 1 },
                      transition: {
                        delay: 0.3,
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                      },
                      className:
                        "absolute bottom-30 -left-2 h-[458px] w-2/3 overflow-hidden rounded-[46px] lg:-left-18 lg:w-[305px]",
                      children: (0, s.jsx)("video", {
                        src: "/videos/4.mp4",
                        alt: "Meme",
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        width: 1e3,
                        height: 1e3,
                        className: "size-full object-cover",
                      }),
                    }),
                    (0, s.jsx)(n.P.div, {
                      initial: {
                        opacity: 0,
                        y: "2rem",
                        rotate: 20,
                        scale: 0.7,
                      },
                      viewport: { once: !0 },
                      whileInView: { opacity: 1, y: 0, rotate: 0, scale: 1 },
                      transition: {
                        duration: 0.7,
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      },
                      className:
                        "absolute bottom-0 z-10 aspect-square h-auto w-3/5 overflow-hidden rounded-3xl lg:-bottom-2.5 lg:-left-6.5 lg:h-[232px] lg:w-[232px]",
                      children: (0, s.jsx)("video", {
                        src: "/videos/1.mp4",
                        alt: "Meme",
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        width: 1e3,
                        height: 1e3,
                        className: "size-full object-cover",
                      }),
                    }),
                    (0, s.jsx)(n.P.div, {
                      initial: {
                        opacity: 0,
                        y: "2rem",
                        rotate: -25,
                        scale: 0.6,
                      },
                      viewport: { once: !0 },
                      whileInView: { opacity: 1, y: 0, rotate: 0, scale: 1 },
                      transition: {
                        delay: 0.5,
                        type: "spring",
                        stiffness: 80,
                        damping: 8,
                      },
                      className:
                        "absolute right-2 -bottom-12 z-10 h-[194px] w-[194px] overflow-hidden rounded-2xl lg:-right-12 lg:-bottom-7",
                      children: (0, s.jsx)("video", {
                        src: "/videos/6.mp4",
                        alt: "Meme",
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        width: 1e3,
                        height: 1e3,
                        className: "size-full object-cover",
                      }),
                    }),
                    (0, s.jsx)(n.P.div, {
                      initial: { opacity: 0, scale: 0.5, rotate: 10 },
                      viewport: { once: !0 },
                      whileInView: { opacity: 1, scale: 1, rotate: 0, y: 0 },
                      transition: {
                        duration: 1,
                        delay: 0.2,
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      },
                      className:
                        "relative h-[458px] w-full overflow-hidden rounded-2xl lg:w-[505px]",
                      children: (0, s.jsx)("video", {
                        src: "/videos/5.mp4",
                        alt: "Meme",
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        width: 1e3,
                        height: 1e3,
                        className: "size-full object-cover",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "space-y-5",
                  children: [
                    (0, s.jsx)("p", {
                      className: "font-unbounded font-bold text-4xl",
                      children: (0, s.jsx)(c.B, {
                        as: "span",
                        once: !0,
                        animation: "blurIn",
                        delay: 0.2,
                        by: a ? "word" : "character",
                        children: "The word 6900 was said:",
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "space-y-2",
                      children: [
                        (0, s.jsxs)("p", {
                          className:
                            "font-unbounded font-bold text-primary text-5xl lg:text-6xl",
                          children: [
                            "13.8M ",
                            (0, s.jsx)(c.B, {
                              as: "span",
                              once: !0,
                              animation: "blurIn",
                              delay: 0.4,
                              by: a ? "word" : "character",
                              children: "times",
                            }),
                          ],
                        }),
                        (0, s.jsx)("p", {
                          className: "font-unbounded font-bold text-4xl",
                          children: (0, s.jsx)(c.B, {
                            as: "span",
                            once: !0,
                            animation: "blurIn",
                            delay: 0.6,
                            by: a ? "word" : "character",
                            children: "Today on X",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "relative z-10 space-y-11",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "flex items-center justify-center gap-4 px-5 max-lg:flex-col lg:justify-between",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        "font-unbounded font-bold text-4xl max-lg:text-center",
                      children: (0, s.jsx)(c.B, {
                        as: "h1",
                        once: !0,
                        animation: "blurIn",
                        delay: 0.2,
                        by: a ? "word" : "character",
                        children: "PEPE6900 Memes",
                      }),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "relative grid w-full max-w-7xl grid-cols-12 gap-5 px-5",
                  children: p.map((e, a) =>
                    (0, s.jsx)(
                      n.P.div,
                      {
                        initial: {
                          opacity: 0,
                          y: "4rem",
                          rotate: 15,
                          scale: 0.6,
                        },
                        whileInView: { opacity: 1, y: 0, rotate: 0, scale: 1 },
                        transition: {
                          delay: 0.2 + 0.15 * a,
                          type: "spring",
                          stiffness: 100,
                          damping: 12,
                        },
                        viewport: { once: !0 },
                        className:
                          "col-span-6 aspect-square size-full max-w-[20rem] object-cover lg:col-span-3",
                        children: (0, s.jsx)(
                          r.default,
                          {
                            src: e,
                            alt: "Meme",
                            width: 1e3,
                            height: 1e3,
                            className: "size-full object-cover object-[0%_25%]",
                          },
                          a
                        ),
                      },
                      a
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      let p = [
        "/images/img-meme-1.png",
        "/images/img-meme-2.png",
        "/images/img-meme-3.png",
        "/images/img-meme-4.png",
        "/images/img-meme-5.png",
        "/images/img-meme-6.png",
        "/images/img-meme-7.png",
        "/images/img-meme-8.png",
      ];
    },
    2266: (e, a, t) => {
      "use strict";
      t.d(a, { Hero: () => g });
      var s = t(5155),
        i = t(9084),
        l = t(1826),
        n = t(6766),
        r = t(7615);
      let o = (e) => {
          let { children: a, reverse: t } = e;
          return (0, s.jsx)(l.P.div, {
            initial: { translateX: t ? "-100%" : "0%" },
            animate: { translateX: t ? "0%" : "-100%" },
            transition: { duration: 50, repeat: 1 / 0, ease: "linear" },
            className: "flex px-2",
            children: a,
          });
        },
        c = () =>
          (0, s.jsx)("a", {
            href: "/",
            rel: "nofollow",
            target: "_blank",
            className:
              "text-foreground flex items-center justify-center gap-6 px-4 py-2 transition-colors md:py-3",
            children: (0, s.jsx)("p", { children: "$PEPE6900" }),
          }),
        d = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
            ],
          }),
        m = () =>
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
              (0, s.jsx)(c, {}),
            ],
          }),
        x = () =>
          (0, s.jsxs)(l.P.section, {
            initial: { opacity: 0, y: "2rem" },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.4, delay: 0.8 },
            className: "absolute -bottom-10 z-30",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "bg-secondary border-primary-dark flex translate-y-[50%] scale-110 rotate-[3deg] overflow-hidden border-y-4",
                children: [
                  (0, s.jsx)(o, { children: (0, s.jsx)(d, {}) }),
                  (0, s.jsx)(o, { children: (0, s.jsx)(d, {}) }),
                  (0, s.jsx)(o, { children: (0, s.jsx)(d, {}) }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "bg-secondary border-primary-dark flex -translate-y-[50%] scale-110 -rotate-[3deg] overflow-hidden border-y-4",
                children: [
                  (0, s.jsx)(o, { reverse: !0, children: (0, s.jsx)(m, {}) }),
                  (0, s.jsx)(o, { reverse: !0, children: (0, s.jsx)(m, {}) }),
                  (0, s.jsx)(o, { reverse: !0, children: (0, s.jsx)(m, {}) }),
                ],
              }),
            ],
          });
      var p = t(2363);
      function g() {
        return (0, s.jsxs)("section", {
          id: "hero",
          className:
            "relative flex h-full min-h-screen w-full justify-center py-38 lg:items-center lg:py-0",
          children: [
            (0, s.jsxs)(l.P.div, {
              initial: { opacity: 0, scale: 1.1 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.4, delay: 0.2 },
              className: "absolute z-0 h-full w-full",
              children: [
                (0, s.jsx)("video", {
                  src: "/videos/bg.mp4",
                  alt: "Hero Background",
                  style: {height:'100%',width:'100%'},
                  fill: !0,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  className: "object-cover",
                }),
                (0, s.jsx)("div", {
                  className:
                    "absolute bottom-0 left-0 z-0 h-[200px] w-full bg-gradient-to-t from-black to-transparent",
                }),
              ],
            }),
            (0, s.jsx)(x, {}),
            (0, s.jsxs)("div", {
              className:
                "relative mx-auto grid h-full w-full max-w-7xl grid-cols-12 items-start justify-center gap-5 px-5 lg:gap-20",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "relative col-span-12 flex flex-col items-start gap-5 lg:col-span-6 lg:gap-10",
                  children: [
                    (0, s.jsxs)("div", {
                      className:
                        "font-unbounded max-w-[450px] text-5xl leading-[135%] font-bold lg:text-[72px]",
                      children: [
                        (0, s.jsx)(p.B, {
                          as: "h1",
                          once: !0,
                          animation: "blurIn",
                          delay: 0.2,
                          by: "character",
                          children: "JUST A",
                        }),
                        (0, s.jsx)(p.B, {
                          as: "h1",
                          once: !0,
                          animation: "blurIn",
                          delay: 0.4,
                          by: "character",
                          children: "$PEPE6900",
                        }),
                        (0, s.jsx)(p.B, {
                          as: "h1",
                          once: !0,
                          animation: "blurIn",
                          delay: 0.6,
                          by: "character",
                          children: "DEGEN",
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "text-foreground-secondary max-w-[540px]",
                      children: (0, s.jsx)(p.B, {
                        as: "span",
                        once: !0,
                        animation: "blurIn",
                        delay: 0.8,
                        by: "character",
                        children:
                          "$PEPE6900 isn't just another token, it's a movement built on resilience, community, and unshakable optimism.",
                      }),
                    }),
                    (0, s.jsxs)(l.P.div, {
                      initial: {
                        opacity: 0,
                        y: "2rem",
                        scale: 0.8,
                        rotate: -5,
                      },
                      animate: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                      transition: {
                        duration: 0.6,
                        delay: 0.6,
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                      },
                      className:
                        "flex flex-row items-center justify-center gap-2 lg:gap-3",
                      children: [
                        (0, s.jsx)(r.$, {
                          onClick: () => window.open("https://t.me/pepe6900chat", "_blank"),
                          children: "Join Community",
                        }),
                        (0, s.jsx)(r.$, {
                          variant: "secondary",
                          onClick: () => window.open(i.A.CHART_URL, "_blank"),
                          children: "View Chart",
                        }),
                        (0, s.jsx)(r.$, {
                          variant: "secondary",
                          onClick: () => window.open(i.A.X_URL, "_blank"),
                          children: "X Page",
                        }),
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    "relative col-span-12 flex h-full flex-col items-center justify-center pt-[25vh] lg:col-span-6 lg:pt-0",
                  children: [
                    (0, s.jsx)(l.P.div, {
                      initial: { opacity: 0, scale: 0.5, rotate: 15 },
                      animate: { opacity: 1, scale: 1, rotate: 0 },
                      transition: {
                        delay: 0.8,
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      },
                      className:
                        "absolute inset-0 top-20 left-20 z-0 size-[15rem] rounded-full bg-[#659847] blur-3xl lg:-top-0 lg:left-10 lg:size-[25rem]",
                    }),
                    (0, s.jsx)(l.P.div, {
                      initial: {
                        opacity: 0,
                        x: 0,
                        y: 0,
                        scale: 0.6,
                        rotate: 15,
                      },
                      animate: {
                        opacity: 1,
                        x: -70,
                        y: -70,
                        scale: 1,
                        rotate: -7,
                      },
                      transition: {
                        delay: 0.6,
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                      },
                      className:
                        "absolute z-10 size-[12rem] -rotate-15 overflow-hidden rounded-xl lg:size-[20rem]",
                      children: (0, s.jsx)("video", {
                        src: "/videos/2.mp4",
                        alt: "Hero Image",
                        width: 500,
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        height: 500,
                        className: "size-full object-cover",
                      }),
                    }),
                    (0, s.jsx)(l.P.div, {
                      initial: {
                        opacity: 0,
                        x: 0,
                        y: 0,
                        scale: 0.6,
                        rotate: -20,
                      },
                      animate: {
                        opacity: 1,
                        x: 70,
                        y: 70,
                        scale: 1,
                        rotate: 30,
                      },
                      transition: {
                        delay: 0.4,
                        type: "spring",
                        stiffness: 100,
                        damping: 12,
                      },
                      className:
                        "absolute z-10 size-[12rem] -rotate-15 overflow-hidden rounded-xl lg:size-[20rem]",
                      children: (0, s.jsx)("video", {
                        src: "/videos/1.mp4",
                        alt: "Hero Image",
                        width: 500,
                        height: 500,
                        autoPlay: !0,
                        muted: !0,
                        loop: !0,
                        className: "size-full object-cover",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    2409: (e, a, t) => {
      Promise.resolve().then(t.bind(t, 2266)),
        Promise.resolve().then(t.bind(t, 1922)),
        Promise.resolve().then(t.bind(t, 3334)),
        Promise.resolve().then(t.bind(t, 5792));
    },
    3334: (e, a, t) => {
      "use strict";
      t.d(a, { Order: () => d });
      var s = t(5155),
        i = t(1826),
        l = t(6766),
        n = t(2363),
        r = t(7615),
        o = t(9084),
        c = t(9809);
      function d() {
        let e = (0, c.U)("(max-width: 768px)");
        return (0, s.jsx)("section", {
          id: "order",
          className:
            "relative flex h-full w-full items-center justify-center py-32",
          children: (0, s.jsxs)("div", {
            className:
              "grid w-full max-w-7xl grid-cols-12 items-center justify-between gap-5 px-5 lg:gap-10",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "col-span-12 flex flex-col items-center gap-5 lg:col-span-6 lg:items-start",
                children: [
                  (0, s.jsx)(i.P.h1, {
                    className:
                      "font-1 col-span-12 flex flex-col gap-5 text-center text-5xl lg:text-6xl",
                    children: (0, s.jsxs)("div", {
                      className:
                        "font-unbounded flex flex-col text-center text-4xl font-bold lg:text-start lg:text-6xl",
                      children: [
                        (0, s.jsx)(n.B, {
                          once: !0,
                          animation: "blurIn",
                          delay: 0.2,
                          by: e ? "word" : "character",
                          children: "Join Your",
                        }),
                        (0, s.jsx)(n.B, {
                          once: !0,
                          animation: "blurIn",
                          delay: 0.2,
                          by: e ? "word" : "character",
                          color: "#00ff26",
                          children: "PEPE6900 Fam",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(i.P.div, {
                    initial: { opacity: 0, x: "-3rem", scale: 0.8, rotate: -5 },
                    whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
                    transition: {
                      delay: 0.4,
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                    viewport: { once: !0 },
                    onClick: () => window.open("https://t.me/pepe6900chat", "_blank"),
                    children: (0, s.jsx)(r.$, { children: "Telegram" }),
                  }),
                ],
              }),
              (0, s.jsx)(i.P.div, {
                initial: { opacity: 0, x: "3rem", scale: 0.8, rotate: -10 },
                whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
                transition: {
                  delay: 0.2,
                  type: "spring",
                  stiffness: 120,
                  damping: 15,
                },
                viewport: { once: !0 },
                className:
                  "col-span-12 size-full max-w-[35rem] lg:col-span-6 lg:ml-auto",
                children: (0, s.jsx)(l.default, {
                  src: "/images/img-lambo.png",
                  alt: "Hero Image",
                  width: 500,
                  height: 500,
                  className: "size-full rounded-xl object-cover",
                }),
              }),
            ],
          }),
        });
      }
    },
    5792: (e, a, t) => {
      "use strict";
      t.d(a, { Tokenomics: () => d });
      var s = t(5155),
        i = t(1826),
        l = t(6766),
        n = t(2115),
        r = t(7615),
        o = t(2363),
        c = t(9809);
      function d() {
        let e = "0x421CFa011c9D2eDA25bDD46A95aCaf1A38e53e11",
          [a, t] = (0, n.useState)(!1),
          d = (0, c.U)("(max-width: 768px)");
        return (0, s.jsx)("section", {
          id: "tokenomics",
          className:
            "relative flex h-full min-h-screen w-full items-center justify-center pt-32 pb-20",
          children: (0, s.jsxs)("div", {
            className:
              "mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 lg:gap-20",
            children: [
              (0, s.jsx)("h1", {
                className:
                  "font-unbounded text-center text-4xl font-bold lg:text-6xl",
                children: (0, s.jsx)(o.B, {
                  once: !0,
                  animation: "blurIn",
                  delay: 0.2,
                  by: d ? "word" : "character",
                  children: "What is PEPE6900",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "grid w-full grid-cols-12 items-center justify-between gap-5 lg:gap-5",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "relative col-span-12 flex items-center justify-center lg:col-span-5",
                    children: (0, s.jsxs)(i.P.div, {
                      initial: {
                        opacity: 0,
                        x: "-3rem",
                        scale: 0.8,
                        rotate: -10,
                      },
                      whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
                      transition: {
                        delay: 0.4,
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                      },
                      viewport: { once: !0 },
                      className: "relative size-full max-w-[20rem]",
                      children: [
                        (0, s.jsx)("video", {
                          src: "/videos/33.mp4",
                          alt: "Hero Image",
                          autoPlay: !0,
                          muted: !0,
                          loop: !0,
                          width: 500,
                          height: 500,
                          className: "size-full rounded-xl object-cover",
                        }),
                        (0, s.jsx)(l.default, {
                          src: "/images/uniswap.png",
                          alt: "pump",
                          width: 100,
                          height: 100,
                          className:
                            "absolute -top-8 -right-8 size-24 object-contain",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)(i.P.div, {
                    initial: { opacity: 0, x: "3rem", scale: 0.8, rotate: 5 },
                    whileInView: { opacity: 1, x: 0, scale: 1, rotate: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                    },
                    viewport: { once: !0 },
                    className:
                      "col-span-12 flex w-full flex-col gap-5 lg:col-span-7 lg:gap-10",
                    children: (0, s.jsxs)("p", {
                      className: "max-lg:text-center lg:text-[32px]",
                      children: [
                        `PEPE6900 is the ultimate fusion of internet legend and cosmic ambition—a memecoin that's not just riding the frog wave, but launching it to the stars. Born from the chaotic genius of the original PEPE meme (you know, that sad-yet-savage frog who's been through it all), PEPE6900 cranks the dial to 11 with a cheeky nod to the "nice" milestone of 69 (doubled for extra spice) and 00 for that clean-slate reset to zero-gravity gains.`,
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col items-center justify-center gap-2",
                children: [
                  (0, s.jsx)(i.P.div, {
                    initial: { opacity: 0, y: "3rem", scale: 0.8, rotate: -5 },
                    whileInView: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.2,
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                    },
                    viewport: { once: !0 },
                    className: "text-xl uppercase",
                    children: "Contract Address",
                  }),
                  (0, s.jsxs)(i.P.div, {
                    initial: { opacity: 0, y: "3rem", scale: 0.8, rotate: 5 },
                    whileInView: { opacity: 1, y: 0, scale: 1, rotate: 0 },
                    transition: {
                      duration: 0.8,
                      delay: 0.4,
                      type: "spring",
                      stiffness: 100,
                      damping: 12,
                    },
                    viewport: { once: !0 },
                    className:
                      "flex flex-row items-center gap-2 max-lg:flex-col",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "bg-card-background border-secondary rounded-full border-[2px] px-3 py-2 text-xs break-all lg:text-lg",
                        children: e,
                      }),
                      (0, s.jsx)(r.$, {
                        onClick: function () {
                          navigator.clipboard.writeText(e),
                            t(!0),
                            setTimeout(() => {
                              t(!1);
                            }, 1e3);
                        },
                        children: a ? "Copied!" : "Copy!",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
  },
  (e) => {
    e.O(0, [398, 360, 441, 964, 358], () => e((e.s = 2409))), (_N_E = e.O());
  },
]);
