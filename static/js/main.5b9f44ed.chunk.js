(this.webpackJsonpnew = this.webpackJsonpnew || []).push([
    [0], {
        389: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"beanRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"buyEggs","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"},{"internalType":"uint256","name":"contractBalance","type":"uint256"}],"name":"calculateEggBuy","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eth","type":"uint256"}],"name":"calculateEggBuySimple","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"eggs","type":"uint256"}],"name":"calculateEggSell","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getEggsSinceLastHatch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyEggs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"adr","type":"address"}],"name":"getMyMiners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"ref","type":"address"}],"name":"hatchEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seedMarket","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"sellEggs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        407: function(e, t, n) {},
        421: function(e, t) {},
        424: function(e, t) {},
        426: function(e, t) {},
        430: function(e, t) {},
        431: function(e, t) {},
        456: function(e, t) {},
        458: function(e, t) {},
        469: function(e, t) {},
        471: function(e, t) {},
        482: function(e, t) {},
        484: function(e, t) {},
        500: function(e, t) {},
        533: function(e, t) {},
        534: function(e, t) {},
        602: function(e, t) {},
        607: function(e, t) {},
        609: function(e, t) {},
        616: function(e, t) {},
        617: function(e, t) {},
        641: function(e, t) {},
        648: function(e, t) {},
        696: function(e, t) {},
        842: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                r = n.n(a),
                i = n(118),
                c = n.n(i),
                o = n(883),
                s = (n(407), n(884)),
                u = n(228),
                d = n(15),
                l = n(874),
                b = n(886),
                p = n(2),
                h = n.n(p),
                j = n(7),
                A = n(26),
                f = n(378),
                g = n(62),
                m = n.n(g),
                x = n(381),
                O = n.n(x),
                y = n(391),
                v = n(878),
                w = n(877),
                B = n(1),
                S = Object(a.createContext)({
                    address: null,
                    connect: function() {
                        return null
                    },
                    loading: !1,
                    disconnect: function() {
                        return null
                    },
                    chainId: null,
                    setSnackbar: function() {
                        return null
                    }
                }),
                C = {
                    walletconnect: {
                        package: y.a,
                        options: {
                            rpc: {
                                250: "https://rpc.ftm.tools/",
                                250: "https://rpc.ftm.tools/"
                            },
                            network: "Polygon"
                        }
                    }
                },
                E = Object(a.forwardRef)((function(e, t) {
                    return Object(B.jsx)(w.a, Object(f.a)({
                        elevation: 6,
                        ref: t,
                        variant: "filled"
                    }, e))
                })),
                k = new O.a({
                    cacheProvider: !0,
                    providerOptions: C
                }),
                W = function(e) {
                    var t = e.children,
                        n = Object(a.useState)(),
                        r = Object(A.a)(n, 2),
                        i = r[0],
                        c = r[1],
                        o = Object(a.useState)(!1),
                        s = Object(A.a)(o, 2),
                        u = s[0],
                        d = s[1],
                        l = Object(a.useState)(null),
                        b = Object(A.a)(l, 2),
                        p = b[0],
                        f = b[1],
                        g = Object(a.useState)(null),
                        x = Object(A.a)(g, 2),
                        O = x[0],
                        y = x[1],
                        w = function(e) {
                            e.on("disconnect", (function(e) {
                                console.log(e), y(null), c(null)
                            })), e.on("accountsChanged", (function(e) {
                                c(e[0]), f({
                                    type: "info",
                                    message: "Account Changed"
                                })
                            })), e.on("chainChanged", (function(e) {
                                y(e)
                            }))
                        },
                        C = function() {
                            var e = Object(j.a)(h.a.mark((function e() {
                                var t, n, a, r;
                                return h.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!i) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if (d(!0), e.prev = 3, (t = new m.a(m.a.givenProvider)).currentProvider) {
                                                e.next = 8;
                                                break
                                            }
                                            return f({
                                                type: "error",
                                                message: '"No provider was found"'
                                            }), e.abrupt("return");
                                        case 8:
                                            return e.next = 10, k.connect();
                                        case 10:
                                            return n = e.sent, t = new m.a(n), w(n), e.next = 15, t.eth.getAccounts();
                                        case 15:
                                            return a = e.sent, e.next = 18, t.eth.getChainId();
                                        case 18:
                                            r = e.sent, c(a[0]), y(r), e.next = 27;
                                            break;
                                        case 23:
                                            e.prev = 23, e.t0 = e.catch(3), console.error(e.t0), f({
                                                type: "error",
                                                message: "Failed to connect"
                                            });
                                        case 27:
                                            d(!1);
                                        case 28:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [3, 23]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        W = function(e, t) {
                            "clickaway" !== t && f(null)
                        };
                    return Object(a.useEffect)((function() {
                        k.cachedProvider && C()
                    }), []), Object(B.jsxs)(S.Provider, {
                        value: {
                            address: i,
                            loading: u,
                            connect: C,
                            disconnect: function() {
                                k.clearCachedProvider(), c(null), y(null)
                            },
                            chainId: O,
                            setSnackbar: f
                        },
                        children: [t, p && Object(B.jsx)(v.a, {
                            open: !!p,
                            autoHideDuration: 4e3,
                            onClose: W,
                            children: Object(B.jsx)(E, {
                                onClose: W,
                                severity: null === p || void 0 === p ? void 0 : p.type,
                                sx: {
                                    width: "100%"
                                },
                                children: null === p || void 0 === p ? void 0 : p.message
                            })
                        })]
                    })
                },
                T = function() {
                    return Object(a.useContext)(S)
                },
                M = Object(l.a)(b.a)((function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        position: "fixed",
                        right: 48,
                        top: 48
                    }, t.breakpoints.down("md"), {
                        display: "none"
                    })
                })),
                R = Object(l.a)(b.a)((function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        display: "none",
                        marginTop: -24,
                        marginBottom: 48,
                        width: "95%",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }, t.breakpoints.down("md"), {
                        display: "block"
                    })
                }));

            function U(e) {
                var t = e.responsive,
                    n = void 0 === t || t,
                    a = T(),
                    r = a.address,
                    i = a.loading,
                    c = a.connect,
                    o = a.disconnect;
                return n ? Object(B.jsx)(M, {
                    color: "secondary",
                    variant: "contained",
                    disabled: i,
                    onClick: function() {
                        return r ? o() : c()
                    },
                    children: r ? "Disconnect" : "Connect"
                }) : Object(B.jsx)(R, {
                    color: "secondary",
                    variant: "contained",
                    disabled: i,
                    onClick: function() {
                        return r ? o() : c()
                    },
                    children: r ? "Disconnect" : "Connect"
                })
            }
            var V = n(887),
                Z = n.p + "static/media/FullLogo.ec341c2e.png",
                F = Object(l.a)("div")((function(e) {
                    var t = e.theme;
                    return Object(d.a)({
                        textAlign: "center",
                        paddingBottom: 24
                    }, t.breakpoints.down("md"), {
                        h5: {
                            fontSize: 20,
                            margin: 0
                        }
                    })
                }));

            function Q() {
                return Object(B.jsxs)(F, {
                    children: [Object(B.jsx)("img", {
                            src: Z,
                            alt: "",
                            width: "100%",
                            style: {
                                marginTop: -48
                            }
                        }), Object(B.jsx)(U, {
                            responsive: !1
                        }), Object(B.jsx)(V.a, {
                            variant: "h5",
                            marginTop: -3,
                            children: "Pool con el rendimiento diario más sabroso. Hornear BFTM Y GANA FTM"
                        
                        }), Object(B.jsx)(V.a, {
                            variant: "h10",
                            marginTop: -3,
                            children: "MÍNIMO DE INVERSIÓN: 15 FTM"
                        }),
                        Object(B.jsx)(s.a, {
                            marginTop: 3,
                            marginBottom: 3,
                            children: Object(B.jsx)(b.a, {
                                variant: "contained",
                                fullWidth: !0,
                                href: "https://ftmscan.com/",
                                target: "__blank",
                                // disabled: n || !d || 0 === +E || Z,
                                onClick: K,
                                children: "FTMSCAN"
                            })
                        })



                    ]
                })
            }
            var Y = n(890),
                D = n(888),
                G = n(881),
                I = n(889),
                N = n(891),
                H = n(23),
                L = Object(l.a)("input")({
                    fontSize: 24,
                    fontWeight: 500,
                    padding: "12px 90px 12px 16px",
                    textAlign: "right",
                    borderRadius: 0,
                    border: "1px solid #555",
                    background: "white",
                    width: "100%",
                    outline: "none",
                    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                        MozAppearance: "textfield"
                    }
                });

            function P(e) {
                var t = e.value,
                    n = e.max,
                    a = e.onChange,
                    r = void 0 === a ? function() {} : a;
                return Object(B.jsxs)(s.a, {
                    position: "relative",
                    children: [Object(B.jsx)(L, {
                        type: "number",
                        min: 0,
                        max: n,
                        value: t,
                        onChange: function(e) {
                            return r(e.target.value)
                        }
                    }), Object(B.jsx)(V.a, {
                        fontSize: 22,
                        position: "absolute",
                        top: 9,
                        right: 9,
                        fontWeight: 500,
                        color: "black",
                        children: "FTM"
                    })]
                })
            }
            var z = n(389),
                K = 250,
                q = "0x0000000000000000000000000000000",
                J = "https://ftmscan.com/",
                X = Object(a.createContext)({
                    contract: null,
                    web: null,
                    wrongNetwork: !1,
                    getBnbBalance: function() {
                        return null
                    },
                    fromWei: function() {
                        return null
                    },
                    toWei: function() {
                        return null
                    }
                }),
                _ = function(e) {
                    var t = e.children,
                        n = Object(a.useState)(),
                        r = Object(A.a)(n, 2),
                        i = r[0],
                        c = r[1],
                        o = Object(a.useState)(),
                        s = Object(A.a)(o, 2),
                        u = s[0],
                        d = s[1],
                        l = T(),
                        b = l.chainId,
                        p = l.setSnackbar,
                        h = Object(a.useState)(!1),
                        j = Object(A.a)(h, 2),
                        f = j[0],
                        g = j[1];
                    Object(a.useEffect)((function() {
                        if (b) {
                            if (parseInt(b) !== K) return p({
                                type: "error",
                                message: "Wrong network"
                            }), void g(!0);
                            g(!1);
                            var e = new m.a;
                            e.setProvider(m.a.givenProvider), d(e);
                            var t = new e.eth.Contract(z, q);
                            c(t)
                        }
                    }), [b]);
                    return Object(B.jsx)(X.Provider, {
                        value: {
                            web3: u,
                            contract: i,
                            wrongNetwork: f,
                            getBnbBalance: function(e) {
                                return u.eth.getBalance(e)
                            },
                            fromWei: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
                                return parseFloat(m.a.utils.fromWei(e, t)).toFixed(3)
                            },
                            toWei: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ether";
                                return m.a.utils.toWei(e, t)
                            }
                        },
                        children: t
                    })
                },
                $ = Object(l.a)(D.a)({
                    background: "rgb(251 241 225)",
                    marginBottom: 24
                }),
                ee = Object(l.a)(G.a)((function(e) {
                    var t = e.theme;
                    return Object(d.a)({}, t.breakpoints.down("sm"), {
                        flexDirection: "column",
                        "> div": {
                            marginLeft: 0,
                            marginRight: 0
                        }
                    })
                }));

            function te() {
                var e = Object(a.useContext)(X),
                    t = e.contract,
                    n = e.wrongNetwork,
                    r = e.getBnbBalance,
                    i = e.fromWei,
                    c = e.toWei,
                    o = e.web3,
                    u = T(),
                    d = u.address,
                    l = u.chainId,
                    p = Object(a.useState)(0),
                    f = Object(A.a)(p, 2),
                    g = f[0],
                    x = f[1],
                    O = Object(a.useState)({
                        bnb: 0,
                        beans: 0,
                        rewards: 0
                    }),
                    y = Object(A.a)(O, 2),
                    v = y[0],
                    w = y[1],
                    S = Object(a.useState)(0),
                    C = Object(A.a)(S, 2),
                    E = C[0],
                    k = C[1],
                    W = Object(a.useState)(0),
                    M = Object(A.a)(W, 2),
                    R = (M[0], M[1], Object(a.useState)(!1)),
                    U = Object(A.a)(R, 2),
                    Z = U[0],
                    F = U[1],
                    Q = new URLSearchParams(Object(H.c)().search),
                    D = function() {
                        o && !n ? r(q).then((function(e) {
                            x(i(e))
                        })) : x(0)
                    },
                    L = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            var a, c, s, u, l;
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o && !n && d) {
                                            e.next = 3;
                                            break
                                        }
                                        return w({
                                            bnb: 0,
                                            beans: 0,
                                            rewards: 0
                                        }), e.abrupt("return");
                                    case 3:
                                        return e.prev = 3, e.next = 6, Promise.all([r(d), t.methods.getMyMiners(d).call().catch((function(e) {
                                            return console.error("myminers", e), 0
                                        })), t.methods.beanRewards(d).call().catch((function(e) {
                                            return console.error("beanrewards", e), 0
                                        }))]);
                                    case 6:
                                        a = e.sent, c = Object(A.a)(a, 3), s = c[0], u = c[1], l = c[2], w({
                                            bnb: i("".concat(s)),
                                            beans: u,
                                            rewards: i("".concat(l))
                                        }), e.next = 18;
                                        break;
                                    case 14:
                                        e.prev = 14, e.t0 = e.catch(3), console.error(e.t0), w({
                                            bnb: 0,
                                            beans: 0,
                                            rewards: 0
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 14]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                Object(a.useEffect)((function() {
                    D()
                }), [o, l]), Object(a.useEffect)((function() {
                    L()
                }), [d, o, l]);
                var z = function() {
                        return m.a.utils.isAddress(Q.get("ref")) ? Q.get("ref") : "0x0000000000000000000000000000000000000000"
                    },
                    K = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            var n;
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(!0), n = z(), e.prev = 2, e.next = 5, t.methods.buyEggs(n).send({
                                            from: d,
                                            value: c("".concat(E))
                                        });
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                                    case 10:
                                        L(), D(), F(!1);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    J = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            var n;
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(!0), n = z(), e.prev = 2, e.next = 5, t.methods.hatchEggs(n).send({
                                            from: d
                                        });
                                    case 5:
                                        e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(2), console.error(e.t0);
                                    case 10:
                                        F(!1);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 7]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _ = function() {
                        var e = Object(j.a)(h.a.mark((function e() {
                            return h.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return F(!0), e.prev = 1, e.next = 4, t.methods.sellEggs().send({
                                            from: d
                                        });
                                    case 4:
                                        e.next = 9;
                                        break;
                                    case 6:
                                        e.prev = 6, e.t0 = e.catch(1), console.error(e.t0);
                                    case 9:
                                        L(), D(), F(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 6]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                return Object(B.jsxs)($, {
                    children: [Z && Object(B.jsx)(I.a, {
                        color: "secondary"
                    }), Object(B.jsxs)(Y.a, {
                        children: [Object(B.jsxs)(G.a, {
                            container: !0,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                            children: [Object(B.jsx)(V.a, {
                                variant: "body1",
                                children: "Contrato"
                            }), Object(B.jsxs)(V.a, {
                                variant: "h5",
                                children: [g, " FTM"]
                            })]
                        }), Object(B.jsxs)(G.a, {
                            container: !0,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                            children: [Object(B.jsx)(V.a, {
                                variant: "body1",
                                children: "Cartera"
                            }), Object(B.jsxs)(V.a, {
                                variant: "h5",
                                children: [v.bnb, " FTM"]
                            })]
                        }), Object(B.jsxs)(G.a, {
                            container: !0,
                            justifyContent: "space-between",
                            alignItems: "center",
                            mt: 3,
                            children: [Object(B.jsx)(V.a, {
                                variant: "body1",
                                children: "Tu BFTM horneado"
                            }), Object(B.jsxs)(V.a, {
                                variant: "h6",
                                children: [v.beans, " BFTM"]
                            })]
                        }), Object(B.jsxs)(s.a, {
                            paddingTop: 4,
                            paddingBottom: 3,
                            children: [Object(B.jsx)(s.a, {
                                children: Object(B.jsx)(P, {
                                    max: +v.bnb,
                                    value: E,
                                    onChange: function(e) {
                                        return function(e) {
                                            k(e)
                                        }(e)
                                    }
                                })
                            }), Object(B.jsx)(s.a, {
                                marginTop: 3,
                                marginBottom: 3,
                                children: Object(B.jsx)(b.a, {
                                    variant: "contained",
                                    fullWidth: !0,
                                    disabled: n || !d || 0 === +E || Z,
                                    onClick: K,
                                    children: "HORNEAR FTM"
                                })
                            }), Object(B.jsx)(N.a, {}), Object(B.jsxs)(G.a, {
                                container: !0,
                                justifyContent: "space-between",
                                alignItems: "center",
                                mt: 3,
                                children: [Object(B.jsx)(V.a, {
                                    variant: "body1",
                                    fontWeight: "bolder",
                                    children: "Tus recompensas"
                                }), Object(B.jsxs)(V.a, {
                                    variant: "h5",
                                    fontWeight: "bolder",
                                    children: [v.rewards, "  FTM"]
                                })]
                            }), Object(B.jsxs)(ee, {
                                container: !0,
                                children: [Object(B.jsx)(G.a, {
                                    item: !0,
                                    flexGrow: 1,
                                    marginRight: 1,
                                    marginTop: 3,
                                    children: Object(B.jsx)(b.a, {
                                        variant: "contained",
                                        color: "secondary",
                                        fullWidth: !0,
                                        disabled: n || !d || Z,
                                        onClick: J,
                                        children: "RE-HORNEAR"
                                    })
                                }), Object(B.jsx)(G.a, {
                                    item: !0,
                                    flexGrow: 1,
                                    marginLeft: 1,
                                    marginTop: 3,
                                    children: Object(B.jsx)(b.a, {
                                        variant: "contained",
                                        color: "secondary",
                                        fullWidth: !0,
                                        disabled: n || !d || Z,
                                        onClick: _,
                                        children: "VENDER BFTM"
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            }
            var ne = Object(l.a)(D.a)({
                    background: "rgb(255 252 248)",
                    marginBottom: 24
                }),
                ae = [{
                    label: "Retorno diario",
                    value: 8
                }, {
                    label: "APR",
                    value: "2,920"
                }, {
                    label: "Tarifa",
                    value: 3
                }];

            function re() {
                return Object(B.jsx)(ne, {
                    children: Object(B.jsxs)(Y.a, {
                        children: [Object(B.jsx)(V.a, {
                            variant: "h5",
                            borderBottom: "6px solid",
                            paddingBottom: 1,
                            children: "Estadisticas"
                        }), Object(B.jsx)(s.a, {
                            paddingTop: 2,
                            children: ae.map((function(e) {
                                return Object(B.jsxs)(G.a, {
                                    container: !0,
                                    justifyContent: "space-between",
                                    children: [Object(B.jsx)(V.a, {
                                        variant: "body1",
                                        gutterBottom: !0,
                                        children: e.label
                                    }), Object(B.jsxs)(V.a, {
                                        gutterBottom: !0,
                                        children: [e.value, "%"]
                                    })]
                                }, e.label)
                            }))
                        })]
                    })
                })
            }
            var ie = Object(l.a)(D.a)({
                    background: "rgb(251 241 225)"
                }),
                ce = Object(l.a)("input")((function(e) {
                    return {
                        fontSize: 10,
                        fontWeight: 300,
                        padding: "10px 12px",
                        borderRadius: 0,
                        border: "1px solid #555",
                        background: "white",
                        width: "100%",
                        outline: "none",
                        color: e.theme.palette.primary.main
                    }
                }));

            function oe(e) {
                var t = e.address,
                    n = "".concat(window.origin, "?ref=").concat(t);
                return Object(B.jsx)(ie, {
                    children: Object(B.jsxs)(Y.a, {
                        style: {
                            paddingLeft: 8,
                            paddingRight: 8
                        },
                        children: [Object(B.jsx)(V.a, {
                            gutterBottom: !0,
                            variant: "h5",
                            textAlign: "center",
                            children: "Enlace de referencia"
                        }), Object(B.jsx)(ce, {
                            value: t ? n : "",
                            readOnly: !0
                        }), Object(B.jsx)(V.a, {
                            textAlign: "center",
                            variant: "body2",
                            marginTop: 2,
                            paddingX: 3,
                            children: "Gane el 12% de cualquier persona que use su enlace de referencia"
                        })]
                    })
                })
            }

            function se() {
                return Object(B.jsxs)(G.a, {
                    container: !0,
                    justifyContent: "center",
                    spacing: 2,
                    marginTop: 4,
                    children: [Object(B.jsx)(G.a, {
                            item: !0,
                            children: Object(B.jsx)("a", {
                                href: J,
                                target: "__blank",
                                children: Object(B.jsx)("img", {
                                    src: "static/media/polygonscan.png",
                                    alt: "",
                                    width: 48,
                                    height: 48
                                })
                            })
                        }), Object(B.jsx)(G.a, {
                            item: !0,
                            children: Object(B.jsx)("a", {
                                href: "https://t.me/",
                                target: "__blank",
                                children: Object(B.jsx)("img", {
                                    src: "static/media/telegram.png",
                                    alt: "",
                                    width: 48,
                                    height: 48
                                })
                            })
                        }),                                              
                    ]
                })

            }
            var ue = Object(l.a)("div")((function(e) {
                var t = e.theme;
                return Object(d.a)({
                    maxWidth: 400,
                    margin: "0 auto"
                }, t.breakpoints.down("sm"), {
                    maxWidth: "100%"
                })
            }));

            function de() {
                var e = T().address;
                return Object(B.jsxs)(ue, {
                    children: [Object(B.jsx)(U, {}), Object(B.jsx)(Q, {}), Object(B.jsx)(te, {}), Object(B.jsx)(re, {}), Object(B.jsx)(oe, {
                        address: e
                    }), Object(B.jsx)(se, {})]
                })
            }
            var le = function() {
                    return Object(B.jsx)(u.a, {
                        children: Object(B.jsx)(s.a, {
                            paddingY: 6,
                            paddingX: 2,
                            children: Object(B.jsx)(de, {})
                        })
                    })
                },
                be = function(e) {
                    e && e instanceof Function && n.e(3).then(n.bind(null, 892)).then((function(t) {
                        var n = t.getCLS,
                            a = t.getFID,
                            r = t.getFCP,
                            i = t.getLCP,
                            c = t.getTTFB;
                        n(e), a(e), r(e), i(e), c(e)
                    }))
                },
                pe = n(390),
                he = n(882),
                je = Object(pe.a)({
                    palette: {
                        primary: {
                            main: "#17215E"
                        },
                        secondary: {
                            main: "#f4b52d"
                        },
                        text: {
                            primary: "#17215E"
                        }
                    },
                    typography: {
                        fontFamily: "Montserrat",
                        body1: {
                            fontSize: 20
                        },
                        body2: {
                            fontSize: 16
                        },
                        allVariants: {
                            color: "#17215E"
                        },
                        h4: {
                            fontWeight: 600,
                            fontSize: 32
                        },
                        h5: {
                            fontSize: 24,
                            fontWeight: 500
                        }
                    },
                    components: {
                        MuiCard: {
                            styleOverrides: {
                                root: {
                                    boxShadow: "6px 6px 20px 6px #00000096",
                                    borderRadius: 20
                                }
                            }
                        },
                        MuiCardContent: {
                            styleOverrides: {
                                root: {
                                    padding: "12px 24px"
                                }
                            }
                        },
                        MuiButton: {
                            styleOverrides: {
                                root: {
                                    borderRadius: 8,
                                    fontWeight: 400,
                                    fontSize: "1.2rem",
                                    padding: "10px",
                                    minWidth: 138
                                },
                                contained: {
                                    boxShadow: "6px 6px 20px 6px #00000096"
                                },
                                containedSecondary: {
                                    color: "#17215E"
                                }
                            }
                        }
                    }
                });

            function Ae(e) {
                var t = e.children;
                return Object(B.jsx)(he.a, {
                    theme: je,
                    children: t
                })
            }
            c.a.render(Object(B.jsxs)(r.a.StrictMode, {
                children: [Object(B.jsx)(o.a, {}), Object(B.jsx)(Ae, {
                    children: Object(B.jsx)(W, {
                        children: Object(B.jsx)(_, {
                            children: Object(B.jsx)(le, {})
                        })
                    })
                })]
            }), document.getElementById("root")), be()
        }
    },
    [
        [842, 1, 2]
    ]
]);
//# sourceMappingURL=main.5b9f44ed.chunk.js.map