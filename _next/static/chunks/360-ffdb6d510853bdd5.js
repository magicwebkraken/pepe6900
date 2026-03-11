"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [360],
  {
    1141: (t, e, n) => {
      n.d(e, { cn: () => r });
      var i = n(2596),
        a = n(9688);
      function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
          e[n] = arguments[n];
        return (0, a.QP)((0, i.$)(e));
      }
    },
    2363: (t, e, n) => {
      n.d(e, { B: () => p });
      var i = n(5155),
        a = n(2115),
        r = n(1826),
        o = n(9114),
        s = n(1141);
      let c = { text: 0.06, word: 0.05, character: 0.03, line: 0.06 },
        d = {
          hidden: { opacity: 1 },
          show: {
            opacity: 1,
            transition: { delayChildren: 0, staggerChildren: 0.05 },
          },
          exit: {
            opacity: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 },
          },
        },
        l = {
          hidden: { opacity: 0 },
          show: { opacity: 1 },
          exit: { opacity: 0 },
        },
        u = {
          fadeIn: {
            container: d,
            item: {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
            },
          },
          blurIn: {
            container: d,
            item: {
              hidden: { opacity: 0, filter: "blur(10px)" },
              show: {
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.3 },
              },
              exit: {
                opacity: 0,
                filter: "blur(10px)",
                transition: { duration: 0.3 },
              },
            },
          },
          blurInUp: {
            container: d,
            item: {
              hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
              show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  y: { duration: 0.3 },
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.3 },
                },
              },
              exit: {
                opacity: 0,
                filter: "blur(10px)",
                y: 20,
                transition: {
                  y: { duration: 0.3 },
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.3 },
                },
              },
            },
          },
          blurInDown: {
            container: d,
            item: {
              hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
              show: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: {
                  y: { duration: 0.3 },
                  opacity: { duration: 0.4 },
                  filter: { duration: 0.3 },
                },
              },
            },
          },
          slideUp: {
            container: d,
            item: {
              hidden: { y: 20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
              exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
            },
          },
          slideDown: {
            container: d,
            item: {
              hidden: { y: -20, opacity: 0 },
              show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
              exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
            },
          },
          slideLeft: {
            container: d,
            item: {
              hidden: { x: 20, opacity: 0 },
              show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
              exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
            },
          },
          slideRight: {
            container: d,
            item: {
              hidden: { x: -20, opacity: 0 },
              show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
              exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
            },
          },
          scaleUp: {
            container: d,
            item: {
              hidden: { scale: 0.5, opacity: 0 },
              show: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  scale: { type: "spring", damping: 15, stiffness: 300 },
                },
              },
              exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
            },
          },
          scaleDown: {
            container: d,
            item: {
              hidden: { scale: 1.5, opacity: 0 },
              show: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.3,
                  scale: { type: "spring", damping: 15, stiffness: 300 },
                },
              },
              exit: { scale: 1.5, opacity: 0, transition: { duration: 0.3 } },
            },
          },
        },
        p = (0, a.memo)((t) => {
          let {
              children: e,
              delay: n = 0,
              duration: a = 0.3,
              variants: p,
              className: g,
              segmentClassName: h,
              as: y = "p",
              startOnView: f = !0,
              once: v = !1,
              by: m = "word",
              animation: x = "fadeIn",
              accessible: w = !0,
              color: b,
              ...D
            } = t,
            C = r.P.create(y),
            U = [];
          switch (m) {
            case "word":
              U = e.split(/(\s+)/);
              break;
            case "character":
              U = e.split("");
              break;
            case "line":
              U = e.split("\n");
              break;
            default:
              U = [e];
          }
          let T = p
            ? {
                container: {
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      opacity: { duration: 0.01, delay: n },
                      delayChildren: n,
                      staggerChildren: a / U.length,
                    },
                  },
                  exit: {
                    opacity: 0,
                    transition: {
                      staggerChildren: a / U.length,
                      staggerDirection: -1,
                    },
                  },
                },
                item: p,
              }
            : x
            ? {
                container: {
                  ...u[x].container,
                  show: {
                    ...u[x].container.show,
                    transition: {
                      delayChildren: n,
                      staggerChildren: a / U.length,
                    },
                  },
                  exit: {
                    ...u[x].container.exit,
                    transition: {
                      staggerChildren: a / U.length,
                      staggerDirection: -1,
                    },
                  },
                },
                item: u[x].item,
              }
            : { container: d, item: l };
          return (0, i.jsx)(o.N, {
            mode: "popLayout",
            children: (0, i.jsxs)(C, {
              variants: T.container,
              initial: "hidden",
              whileInView: f ? "show" : void 0,
              animate: f ? void 0 : "show",
              exit: "exit",
              className: (0, s.cn)("whitespace-pre-wrap", g),
              style: b ? { color: b } : void 0,
              viewport: { once: v },
              "aria-label": w ? e : void 0,
              ...D,
              children: [
                w && (0, i.jsx)("span", { className: "sr-only", children: e }),
                U.map((t, e) =>
                  (0, i.jsx)(
                    r.P.span,
                    {
                      variants: T.item,
                      custom: e * c[m],
                      className: (0, s.cn)(
                        "line" === m ? "block" : "inline-block whitespace-pre",
                        "character" === m && "",
                        h
                      ),
                      "aria-hidden": !!w || void 0,
                      children: t,
                    },
                    "".concat(m, "-").concat(t, "-").concat(e)
                  )
                ),
              ],
            }),
          });
        });
    },
    3011: (t, e, n) => {
      n.d(e, { A: () => c });
      var i = n(5155),
        a = n(2115),
        r = n(8619),
        o = n(5701),
        s = n(6604);
      function c(t) {
        let {
            to: e,
            from: n = 0,
            direction: c = "up",
            delay: d = 0,
            duration: l = 2,
            className: u = "",
            startWhen: p = !0,
            separator: g = "",
            onStart: h,
            onEnd: y,
          } = t,
          f = (0, a.useRef)(null),
          v = (0, r.d)("down" === c ? e : n),
          m = (0, o.z)(v, {
            damping: 20 + (1 / l) * 40,
            stiffness: (1 / l) * 100,
          }),
          x = (0, s.W)(f, { once: !0, margin: "0px" }),
          w = (t) => {
            let e = t.toString();
            if (e.includes(".")) {
              let t = e.split(".")[1];
              if (0 !== parseInt(t)) return t.length;
            }
            return 0;
          },
          b = Math.max(w(n), w(e));
        return (
          (0, a.useEffect)(() => {
            f.current && (f.current.textContent = String("down" === c ? e : n));
          }, [n, e, c]),
          (0, a.useEffect)(() => {
            if (x && p) {
              "function" == typeof h && h();
              let t = setTimeout(() => {
                  v.set("down" === c ? n : e);
                }, 1e3 * d),
                i = setTimeout(() => {
                  "function" == typeof y && y();
                }, 1e3 * d + 1e3 * l);
              return () => {
                clearTimeout(t), clearTimeout(i);
              };
            }
          }, [x, p, v, c, n, e, d, h, y, l]),
          (0, a.useEffect)(() => {
            let t = m.on("change", (t) => {
              if (f.current) {
                let e = b > 0,
                  n = Intl.NumberFormat("en-US", {
                    useGrouping: !!g,
                    minimumFractionDigits: e ? b : 0,
                    maximumFractionDigits: e ? b : 0,
                  }).format(t);
                f.current.textContent = g ? n.replace(/,/g, g) : n;
              }
            });
            return () => t();
          }, [m, g, b]),
          (0, i.jsx)("span", { className: u, ref: f })
        );
      }
    },
    7615: (t, e, n) => {
      n.d(e, { $: () => c });
      var i = n(5155),
        a = n(1141),
        r = n(4624),
        o = n(2085);
      n(2115);
      let s = (0, o.F)(
        "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 hover:shadow-[0px_0px_20px_rgba(0,255,38,0.8)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        {
          variants: {
            variant: {
              default:
                "bg-primary text-secondary hover:bg-secondary hover:text-primary rounded-full border-[4px] border-secondary hover:border-primary",
              destructive:
                "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
              outline:
                "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
              secondary:
                "bg-card-background text-foreground hover:bg-primary hover:text-secondary rounded-full border-[4px] border-secondary",
              ghost:
                "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
              link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
              default: "h-9 px-4 py-5 has-[>svg]:px-3",
              sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
              lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
              icon: "size-9",
              "icon-sm": "size-8",
              "icon-lg": "size-10",
            },
          },
          defaultVariants: { variant: "default", size: "default" },
        }
      );
      function c(t) {
        let { className: e, variant: n, size: o, asChild: c = !1, ...d } = t,
          l = c ? r.DX : "button";
        return (0, i.jsx)(l, {
          "data-slot": "button",
          className: (0, a.cn)(s({ variant: n, size: o, className: e })),
          ...d,
        });
      }
    },
    7699: (t, e, n) => {
      n.d(e, { TrackerProvider: () => g, s: () => h });
      var i = n(5155),
        a = n(2960),
        r = n(5695),
        o = n(2115),
        s = n(9084);
      let c = n(3464).A.create({
          baseURL: s.A.API_BASE_URL,
          headers: { "Content-Type": "application/json" },
        }),
        d = {
          getDateString: function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Date(),
              e = t.getUTCFullYear(),
              n = String(t.getUTCMonth() + 1).padStart(2, "0"),
              i = String(t.getUTCDate()).padStart(2, "0");
            return "".concat(e, "-").concat(n, "-").concat(i);
          },
          getLocalStartOfDay: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date();
            return new Date(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              0,
              0,
              0,
              0
            ).toISOString();
          },
          getLocalEndOfDay: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date();
            return new Date(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              23,
              59,
              59,
              999
            ).toISOString();
          },
          getUTCStartOfDay: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date();
            return new Date(
              Date.UTC(
                t.getUTCFullYear(),
                t.getUTCMonth(),
                t.getUTCDate(),
                0,
                0,
                0,
                0
              )
            ).toISOString();
          },
          getUTCEndOfDay: function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : new Date();
            return new Date(
              Date.UTC(
                t.getUTCFullYear(),
                t.getUTCMonth(),
                t.getUTCDate(),
                23,
                59,
                59,
                999
              )
            ).toISOString();
          },
          getLocalDateRange: function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Date(),
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : new Date();
            return {
              start: d.getLocalStartOfDay(t),
              end: d.getLocalEndOfDay(e),
            };
          },
          getUTCDateRange: function () {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : new Date(),
              e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : new Date();
            return { start: d.getUTCStartOfDay(t), end: d.getUTCEndOfDay(e) };
          },
        },
        l = {
          async getTodayMentionCount(t) {
            var e, n;
            return (
              await c.get("/tracker/today", {
                params: {
                  date: null != (e = t.date) ? e : d.getLocalStartOfDay(),
                  rolling: null == (n = t.rolling) || n,
                },
              })
            ).data.data;
          },
        },
        u = (0, o.createContext)(void 0),
        p = { todayMentionCount: ["tracker", "today-mention-count"] };
      function g(t) {
        let { children: e } = t,
          n = (0, r.usePathname)(),
          {
            data: o,
            isLoading: s,
            error: c,
            refetch: d,
          } = (0, a.I)({
            queryKey: p.todayMentionCount,
            queryFn: () =>
              l.getTodayMentionCount({ date: null, rolling: null }),
            enabled: n.includes("/"),
            retry: 3,
            refetchInterval: 6e4,
          });
        return (0, i.jsx)(u.Provider, {
          value: {
            todayMentionCount: o,
            isTodayMentionCountLoading: s,
            todayMentionCountError: c,
            refetchTodayMentionCount: d,
          },
          children: e,
        });
      }
      function h() {
        let t = (0, o.useContext)(u);
        if (void 0 === t)
          throw Error("useTracker must be used within a TrackerProvider");
        return t;
      }
    },
    9084: (t, e, n) => {
      n.d(e, { A: () => a });
      var i = n(4767);
      let a = i
        .Ikc({
          BUY_URL: i.YjP(),
          CHART_URL: i.YjP(),
          X_URL: i.YjP(),
          API_BASE_URL: i.YjP(),
          APP_URL: i.YjP(),
          LAMBO_URL: i.YjP(),
        })
        .parse({
          BUY_URL:
            "https://app.uniswap.org/swap?inputCurrency=NATIVE&outputCurrency=0x30C488BAF577763bf5F978d29Ec9e7fE6fC61C44",
          CHART_URL:
            "https://dexscreener.com/ethereum/0x30C488BAF577763bf5F978d29Ec9e7fE6fC61C44",
          X_URL: "https://x.com/pepe6900onEth_X",
          API_BASE_URL: "https://api.bullishdegen.com/v1",
          APP_URL: "https://pfp.bullishdegen.com",
          LAMBO_URL: "https://www.lamborghini.com",
        });
    },
    9809: (t, e, n) => {
      n.d(e, { U: () => a });
      var i = n(2115);
      function a(t) {
        let [e, n] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let i = window.matchMedia(t);
            i.matches !== e && n(i.matches);
            let a = () => n(i.matches);
            return (
              window.addEventListener("resize", a),
              () => window.removeEventListener("resize", a)
            );
          }, [e, t]),
          e
        );
      }
    },
  },
]);
