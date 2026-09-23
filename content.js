/*
  Edição rápida:
  - Dados de perfil, carreira e projetos ficam neste arquivo.
  - Textos da interface atual ficam em `design-copy.js`; `copy` mantém a versão anterior.
  - Para adicionar um projeto, duplique um item do array `projects`,
    altere `id`, textos, capa, imagens, tags e links.
  - A página carrega apenas as capas no início; as imagens da galeria
    entram quando o visitante abre um projeto.
*/

window.PORTFOLIO_CONTENT = {
    featuredProjectId: "truhail",
    profileImage: "./assets/images/optimized/profile-new.png",
    profileImageWidth: 400,
    profileImageHeight: 400,
    resumeUrl: "./assets/files/CV_Vinicius.pdf",
    resumeUrlEn: "./assets/files/CV_Vinicius_EN.pdf",
    whatsappNumber: "5519992806229",
    email: "vinicim.augusto@outlook.com",
    phone: "+55 (19) 99280-6229",
    headline: {
        pt: "Desenvolvedor Full Stack Pleno · Backend, integrações e automação",
        en: "Mid-level Full Stack Developer · Backend, integrations and automation"
    },
    bio: {
        pt: "Sou desenvolvedor de software formado em Análise e Desenvolvimento de Sistemas. Trabalho com aplicações web, desktop e mobile, APIs, integrações e automações. Minha experiência também passa pelo suporte técnico e atendimento a clientes, que ajudam a conectar o desenvolvimento às necessidades de quem usa o sistema.",
        en: "I'm a software developer with a degree in Systems Analysis and Development. I work on web, desktop and mobile applications, APIs, integrations and automation. My experience also includes technical support and customer service, which help me connect development with the needs of the people using the software."
    },
    location: {
        pt: "Mococa, São Paulo, Brasil",
        en: "Mococa, São Paulo, Brazil"
    },
    socials: [
        {
            label: "GitHub",
            url: "https://github.com/vinicads"
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/vinicius-augusto-dos-santos-2108b1237/"
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/viniaugustods/"
        }
    ],
    tech: [
        "Node.js",
        "NestJS",
        "TypeScript",
        "Angular",
        "Delphi",
        "Python",
        "PHP",
        "Electron",
        "Capacitor",
        "Vue.js",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "Go",
        "Express",
        "TypeORM",
        "Firebird",
        "PostgreSQL",
        "MySQL",
        "SQLite",
        "SQL",
        "Redis",
        "BullMQ",
        "Socket.IO",
        "WebSockets",
        "Firebase",
        "REST APIs",
        "PDFKit",
        "Docker",
        "Docker Compose",
        "Nginx",
        "GitHub Actions",
        "CI/CD",
        "Git",
        "WordPress",
        "Playwright",
        "Ollama",
        "RPA"
    ],
    stats: [
        {
            value: 11,
            suffix: "+",
            label: {
                pt: "projetos, sistemas e interfaces selecionadas",
                en: "selected projects, systems, and interfaces"
            }
        },
        {
            value: 4,
            suffix: "+",
            label: {
                pt: "anos entre formação, produto e manutenção",
                en: "years across education, product, and maintenance"
            }
        },
        {
            value: 8,
            suffix: "+",
            label: {
                pt: "frentes conectando frontend, API, dados e legado",
                en: "tracks connecting frontend, API, data, and legacy systems"
            }
        }
    ],
    heroPipeline: [
        {
            label: {
                pt: "Briefing",
                en: "Briefing"
            }
        },
        {
            label: {
                pt: "Interface",
                en: "Interface"
            }
        },
        {
            label: {
                pt: "Sistema",
                en: "System"
            }
        },
        {
            label: {
                pt: "Integração",
                en: "Integration"
            }
        },
        {
            label: {
                pt: "Entrega",
                en: "Delivery"
            }
        }
    ],
    paths: [
        {
            icon: "business",
            title: {
                pt: "Projetos para empresas",
                en: "Business projects"
            },
            description: {
                pt: "Sites, landing pages e sistemas para vender, atender e organizar operações com acabamento profissional.",
                en: "Websites, landing pages, and systems to sell, serve, and organize operations with professional polish."
            },
            items: {
                pt: ["Site institucional", "Landing page", "Sistema web", "E-commerce"],
                en: ["Institutional website", "Landing page", "Web system", "E-commerce"]
            },
            href: "#contact",
            cta: {
                pt: "Pedir orçamento",
                en: "Request a quote"
            }
        },
        {
            icon: "maintenance",
            title: {
                pt: "Manutenção e evolução",
                en: "Maintenance and evolution"
            },
            description: {
                pt: "Correções, melhorias visuais e evolução técnica para projetos que já estão no ar.",
                en: "Fixes, visual improvements, and technical evolution for projects already live."
            },
            items: {
                pt: ["WordPress e CMS", "PHP e páginas existentes", "Performance e SEO", "Ajustes contínuos"],
                en: ["WordPress and CMS", "PHP and existing pages", "Performance and SEO", "Ongoing improvements"]
            },
            href: "#services",
            cta: {
                pt: "Ver serviços",
                en: "View services"
            }
        },
        {
            icon: "stack",
            title: {
                pt: "Perfil técnico completo",
                en: "Complete technical profile"
            },
            description: {
                pt: "Full stack de ponta a ponta: interface, API, banco, integrações e legado quando precisa.",
                en: "End-to-end full stack work: UI, API, data, integrations, and legacy systems when needed."
            },
            items: {
                pt: ["React, Angular e Vue", "Node.js, PHP, C# e Go", "SQL, MySQL e Firebird", "Delphi e GameMaker"],
                en: ["React, Angular, and Vue", "Node.js, PHP, C#, and Go", "SQL, MySQL, and Firebird", "Delphi and GameMaker"]
            },
            href: "#projects",
            cta: {
                pt: "Ver experiência",
                en: "View experience"
            }
        }
    ],
    experience: [
        {
            company: "PSZ Sistemas",
            period: {
                pt: "Mar 2026 — Atual",
                en: "Mar 2026 — Present"
            },
            role: {
                pt: "Desenvolvedor de Software",
                en: "Software Developer"
            },
            description: {
                pt: "Desenvolvimento e evolução de sistemas em Delphi e Firebird. Integrações com WhatsApp e Firebase, dashboard gerencial, automações em Python e RPA para o Portal Postal, com melhorias a partir das necessidades dos clientes e da equipe de suporte.",
                en: "Development and maintenance of Delphi and Firebird systems. WhatsApp and Firebase integrations, a management dashboard, Python automation and RPA for Portal Postal, with improvements informed by customers and the support team."
            },
            employment: {
                pt: "Tempo integral · Presencial · Mococa, SP",
                en: "Full-time · On-site · Mococa, SP"
            },
            tags: ["Delphi", "Firebird", "Firebase", "Python", "WhatsApp", "RPA"]
        },
        {
            company: "Trusom innovation",
            period: {
                pt: "Ago 2025 — Jun 2026",
                en: "Aug 2025 — Jun 2026"
            },
            role: {
                pt: "Desenvolvedor Full Stack Pleno",
                en: "Mid-level Full Stack Developer"
            },
            description: {
                pt: "Desenvolvimento de sistemas corporativos, seguros, contratos e benefícios integrados à folha. Aplicações web, desktop e híbridas, chats com WebSockets, componentes reutilizáveis, automações e integrações de pagamento com Mercado Pago e Asaas.",
                en: "Development of business and insurance systems, plus contracts and benefits integrated with payroll. Web, desktop and hybrid applications, WebSocket chats, reusable components, automation and payment integrations with Mercado Pago and Asaas."
            },
            employment: {
                pt: "Autônomo · Remoto",
                en: "Self-employed · Remote"
            },
            tags: ["Angular", "NestJS", "Node.js", "PHP", "Electron", "Capacitor", "WebSockets"]
        },
        {
            company: "Trusom innovation",
            period: {
                pt: "Jan 2025 — Jul 2025",
                en: "Jan 2025 — Jul 2025"
            },
            role: {
                pt: "Desenvolvedor Full Stack Júnior",
                en: "Junior Full Stack Developer"
            },
            description: {
                pt: "Desenvolvimento e manutenção de aplicações com Angular, NestJS, Node.js, PHP e WordPress. APIs REST, integrações, RPAs, automação de documentos, processamento assíncrono e aplicações híbridas com Capacitor, incluindo deploy e sustentação em produção.",
                en: "Development and maintenance of Angular, NestJS, Node.js, PHP and WordPress applications. REST APIs, integrations, RPA, document automation, asynchronous processing and hybrid applications with Capacitor, including deployment and production support."
            },
            employment: {
                pt: "Autônomo · Remoto",
                en: "Self-employed · Remote"
            },
            tags: ["Angular", "NestJS", "Node.js", "PHP", "WordPress", "Capacitor", "RPA"]
        },
        {
            company: "PSZ Sistemas",
            period: {
                pt: "Jan 2025 — Fev 2026",
                en: "Jan 2025 — Feb 2026"
            },
            role: {
                pt: "Suporte técnico",
                en: "Technical Support"
            },
            description: {
                pt: "Atendimento remoto aos clientes, diagnóstico e resolução de problemas, reprodução de erros e apoio em configurações e atualizações. O contato com usuários e regras de negócio serviu de base para a atuação posterior no desenvolvimento.",
                en: "Remote customer support, troubleshooting, bug reproduction and assistance with configuration and updates. Direct experience with users and business rules provided a foundation for the later move into development."
            },
            employment: {
                pt: "Tempo integral · Presencial · Mococa, SP",
                en: "Full-time · On-site · Mococa, SP"
            },
            tags: {
                pt: ["AnyDesk", "Suporte remoto", "Diagnóstico", "Regras de negócio"],
                en: ["AnyDesk", "Remote support", "Troubleshooting", "Business rules"]
            }
        },
        {
            company: "Irmandade Da Santa Casa De Misericordia De Mococa",
            period: {
                pt: "Jun 2023 — Dez 2024",
                en: "Jun 2023 — Dec 2024"
            },
            role: {
                pt: "Estagiário de desenvolvimento de sistemas",
                en: "Systems Development Intern"
            },
            description: {
                pt: "Desenvolvimento e manutenção de sistemas internos com Node.js, Vue.js e NestJS. Atuação nos sistemas de solicitação de prontuários, banco de talentos e CMS do site institucional, integrando interfaces, APIs e banco de dados.",
                en: "Development and maintenance of internal systems with Node.js, Vue.js and NestJS. Work on medical record requests, the talent pool and the institutional website CMS, connecting interfaces, APIs and databases."
            },
            employment: {
                pt: "Estágio · Presencial · Mococa, SP",
                en: "Internship · On-site · Mococa, SP"
            },
            tags: ["Node.js", "Vue.js", "NestJS", "Express", "CMS"]
        }
    ],
    stackMap: [
        {
            id: "frontend",
            label: "Frontend",
            items: ["Angular", "TypeScript", "Vue.js", "React", "HTML", "CSS"]
        },
        {
            id: "backend",
            label: "Backend",
            items: ["Node.js", "NestJS", "TypeORM", "PHP", "Python", "Delphi"]
        },
        {
            id: "data",
            label: {
                pt: "Dados",
                en: "Data"
            },
            items: ["MySQL", "PostgreSQL", "Firebird", "SQLite", "Redis", "Firebase"]
        },
        {
            id: "automation",
            label: {
                pt: "Automação",
                en: "Automation"
            },
            items: ["BullMQ", "RPA", "Playwright", "Socket.IO", "PDFKit", "WebSockets"]
        },
        {
            id: "infra",
            label: "Infra",
            items: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "CI/CD", "Git"]
        }
    ],
    views: {
        client: {
            stats: [
                {
                    value: "01",
                    suffix: "",
                    label: {
                        pt: "diagnóstico, proposta e escopo claros",
                        en: "clear discovery, proposal, and scope"
                    }
                },
                {
                    value: "02",
                    suffix: "",
                    label: {
                        pt: "layout responsivo, código e integrações",
                        en: "responsive layout, code, and integrations"
                    }
                },
                {
                    value: "03",
                    suffix: "",
                    label: {
                        pt: "publicação, ajustes e manutenção",
                        en: "launch, refinements, and maintenance"
                    }
                }
            ],
            tech: [
                "Sites profissionais",
                "Landing pages",
                "Sistemas web",
                "Dashboards",
                "E-commerce",
                "APIs",
                "Automação",
                "Manutenção",
                "Performance",
                "Responsivo"
            ],
            skills: [
                {
                    title: {
                        pt: "Presença online",
                        en: "Online presence"
                    },
                    items: {
                        pt: ["Sites institucionais", "Landing pages", "Portfólios", "Páginas de captação"],
                        en: ["Institutional websites", "Landing pages", "Portfolios", "Lead pages"]
                    }
                },
                {
                    title: {
                        pt: "Sistemas sob medida",
                        en: "Custom systems"
                    },
                    items: {
                        pt: ["Painéis administrativos", "Fluxos internos", "Integrações", "APIs"],
                        en: ["Admin dashboards", "Internal workflows", "Integrations", "APIs"]
                    }
                },
                {
                    title: {
                        pt: "Entrega profissional",
                        en: "Professional delivery"
                    },
                    items: {
                        pt: ["Responsividade", "Performance", "SEO técnico", "Manutenção"],
                        en: ["Responsiveness", "Performance", "Technical SEO", "Maintenance"]
                    }
                }
            ],
            services: [
                {
                    title: {
                        pt: "Site profissional",
                        en: "Professional website"
                    },
                    description: {
                        pt: "Páginas rápidas e responsivas para apresentar sua empresa com mais credibilidade, clareza e acabamento visual.",
                        en: "Fast, responsive pages to present your business with more credibility, clarity, and visual polish."
                    }
                },
                {
                    title: {
                        pt: "Landing page de conversão",
                        en: "Conversion landing page"
                    },
                    description: {
                        pt: "Estrutura focada em oferta, prova de valor e contato, para transformar visitantes em leads ou clientes.",
                        en: "A structure focused on offer, proof of value, and contact, turning visitors into leads or clients."
                    }
                },
                {
                    title: {
                        pt: "Sistema web sob medida",
                        en: "Custom web system"
                    },
                    description: {
                        pt: "Ferramentas internas, painéis e automações para organizar processos e reduzir trabalho manual.",
                        en: "Internal tools, dashboards, and automations to organize processes and reduce manual work."
                    }
                }
            ],
            copy: {
                pt: {
                    documentTitle: "Vinicius Augusto | Desenvolvimento web para negócios",
                    metaDescription: "Desenvolvimento de sites, landing pages e sistemas web para empresas que precisam vender, organizar processos e transmitir confiança.",
                    nav: {
                        about: "Processo",
                        services: "Soluções",
                        projects: "Cases",
                        contact: "Orçamento"
                    },
                    hero: {
                        eyebrow: "Desenvolvimento web sob medida",
                        titleStart: "Sites que",
                        titleEnd: "vendem",
                        role: "E sistemas que deixam sua operação mais organizada, rápida e profissional.",
                        lead: "Eu desenho, desenvolvo e publico páginas e sistemas sob medida para empresas que precisam transformar presença online em confiança, contato e processo bem resolvido.",
                        pointOne: "Página ou sistema pensado para seu objetivo",
                        pointTwo: "Visual limpo, responsivo, leve e preparado para mobile",
                        pointThree: "Entrega com ajustes, publicação e manutenção",
                        primaryCta: "Solicitar orçamento",
                        secondaryCta: "Ver cases",
                        availability: "Atendimento freelance para novos projetos e melhorias"
                    },
                    about: {
                        eyebrow: "Processo",
                        title: "Da ideia ao ar, com clareza técnica e foco no resultado.",
                        paragraphOne: "Começo entendendo objetivo, público, conteúdo e funcionalidades para definir uma solução enxuta e realista.",
                        paragraphTwo: "Depois estruturo interface, desenvolvimento, integrações e responsividade, mantendo o projeto fácil de evoluir.",
                        paragraphThree: "A entrega pode incluir publicação, ajustes finais e manutenção para o site ou sistema continuar funcionando bem.",
                        skillsTitle: "O que pode entrar",
                        educationTitle: "Como funciona"
                    },
                    services: {
                        eyebrow: "Soluções",
                        title: "Sites e sistemas para vender, organizar e dar confiança.",
                        lead: "Você pode começar com uma página objetiva ou evoluir para um sistema completo, conforme a necessidade do negócio."
                    },
                    projects: {
                        eyebrow: "Cases",
                        title: "Projetos reais como base de confiança",
                        lead: "Alguns exemplos de sistemas e interfaces que mostram como uma solução web pode organizar processos e melhorar presença digital.",
                        featured: "Case em destaque",
                        viewDetails: "Ver case"
                    },
                    contact: {
                        eyebrow: "Orçamento",
                        title: "Me conte o que você quer construir.",
                        lead: "Envie uma descrição curta do projeto, objetivo e prazo desejado. Eu retorno com próximos passos e uma proposta objetiva.",
                        whatsapp: "Pedir orçamento",
                        resume: "Ver currículo",
                        whatsappMessage: "Olá! Quero conversar sobre um site ou sistema para meu negócio."
                    },
                    footer: {
                        tagline: "Desenvolvimento web com visual profissional, performance e manutenção simples."
                    }
                },
                en: {
                    documentTitle: "Vinicius Augusto | Web development for businesses",
                    metaDescription: "Websites, landing pages, and web systems for businesses that need to sell, organize processes, and look trustworthy online.",
                    nav: {
                        about: "Process",
                        services: "Solutions",
                        projects: "Cases",
                        contact: "Quote"
                    },
                    hero: {
                        eyebrow: "Custom web development",
                        titleStart: "Sites that",
                        titleEnd: "sell",
                        role: "And systems that make your operation more organized, faster, and more professional.",
                        lead: "I design, build, and launch custom pages and systems for businesses that need to turn online presence into trust, contact, and cleaner workflows.",
                        pointOne: "A page or system shaped around your goal",
                        pointTwo: "Clean, responsive, lightweight visual design prepared for mobile",
                        pointThree: "Delivery with refinements, launch support, and maintenance",
                        primaryCta: "Request a quote",
                        secondaryCta: "View cases",
                        availability: "Freelance support for new projects and improvements"
                    },
                    about: {
                        eyebrow: "Process",
                        title: "From idea to launch, with technical clarity and focus on outcomes.",
                        paragraphOne: "I start by understanding goals, audience, content, and features to define a lean, realistic solution.",
                        paragraphTwo: "Then I structure the interface, development, integrations, and responsiveness while keeping the project easy to evolve.",
                        paragraphThree: "Delivery can include launch, final adjustments, and maintenance so the site or system keeps working well.",
                        skillsTitle: "What can be included",
                        educationTitle: "How it works"
                    },
                    services: {
                        eyebrow: "Solutions",
                        title: "Websites and systems to sell, organize, and build trust.",
                        lead: "You can start with a focused page or evolve into a full system depending on the business need."
                    },
                    projects: {
                        eyebrow: "Cases",
                        title: "Real projects as proof of trust",
                        lead: "Examples of systems and interfaces showing how a web solution can organize workflows and improve digital presence.",
                        featured: "Featured case",
                        viewDetails: "View case"
                    },
                    contact: {
                        eyebrow: "Quote",
                        title: "Tell me what you want to build.",
                        lead: "Send a short description of the project, goal, and desired timeline. I will return with next steps and a clear proposal.",
                        whatsapp: "Request quote",
                        resume: "View resume",
                        whatsappMessage: "Hi! I want to talk about a website or system for my business."
                    },
                    footer: {
                        tagline: "Web development with professional visuals, performance, and simple maintenance."
                    }
                }
            }
        }
    },
    copy: {
        pt: {
            documentTitle: "Vinicius Augusto | Desenvolvedor Full Stack Pleno",
            metaDescription: "Vinicius Augusto dos Santos, desenvolvedor full stack em Mococa, SP. Angular, NestJS, Node.js, TypeScript, integrações, automação e evolução de sistemas.",
            nav: {
                about: "Sobre",
                experience: "Experiência",
                stack: "Stack",
                projects: "Projetos",
                contact: "Contato"
            },
            navCta: "Orçamento",
            floatingCta: "Chamar no WhatsApp",
            themeLabel: {
                light: "Ativar tema claro",
                dark: "Ativar tema escuro"
            },
            menu: {
                open: "Abrir menu",
                close: "Fechar menu"
            },
            hero: {
                eyebrow: "Vinicius Augusto dos Santos",
                name: "Vinicius Augusto dos Santos",
                titleStart: "Sites, sistemas",
                titleEnd: "e automações que resolvem.",
                role: "Desenvolvedor Full Stack Pleno com foco em backend, integrações e automação.",
                lead: "Trabalho com aplicações web, desktop e mobile, APIs e sistemas corporativos. Angular, NestJS, Node.js e TypeScript fazem parte da minha base, junto de Delphi, Python e bancos de dados.",
                purposeTitle: "Meu propósito aqui",
                purposeText: "Mostrar que posso pegar um problema real, organizar o caminho e entregar software publicável, bonito e fácil de manter.",
                pointOne: "Criar sites e landing pages com visual profissional e boa conversão",
                pointTwo: "Construir sistemas web, painéis e fluxos internos para reduzir trabalho manual",
                pointThree: "Modernizar WordPress, legado Delphi, APIs, integrações e automações",
                primaryCta: "Ver cases",
                secondaryCta: "Pedir orçamento",
                tertiaryCta: "Entender stack",
                availability: "Brasil / 2026 - disponível para freelance, melhorias e oportunidades full stack",
                scrollCta: "Scroll para explorar ↓"
            },
            impact: {
                eyebrow: "Impacto selecionado",
                title: "Menos atrito. Mais software funcionando.",
                lead: "Projetos em saúde, mobilidade, seguros, recrutamento, WordPress, Delphi e automações com foco em clareza, operação e manutenção."
            },
            about: {
                eyebrow: "Sobre",
                title: "Mais que código: sistemas simples para problemas complexos.",
                paragraphOne: "Sou desenvolvedor de software em Mococa, SP, formado em Análise e Desenvolvimento de Sistemas. Minha experiência passa por aplicações web, desktop e mobile, sistemas corporativos, seguros e pagamentos.",
                paragraphTwo: "Desenvolvo APIs, integrações, RPAs, automações de documentos e processos assíncronos. Trabalho também com comunicação em tempo real, dashboards e manutenção de aplicações em produção.",
                paragraphThree: "Passei pelo suporte técnico e atendimento a clientes antes de assumir o desenvolvimento na PSZ Sistemas. Esse contato ajuda a entender o problema por trás de cada pedido e a construir soluções de fácil manutenção.",
                skillsTitle: "Habilidades",
                educationTitle: "Formação"
            },
            experience: {
                eyebrow: "Experiência",
                title: "Experiência aplicada em produto real.",
                lead: "Da Santa Casa à Trusom innovation e à PSZ Sistemas: desenvolvimento, suporte, integrações e automação em operações reais.",
                watermark: "Experiência"
            },
            stack: {
                eyebrow: "Stack / mapa técnico",
                title: "Stack para tirar ideias do papel.",
                lead: "Frontend, backend, dados, automação e infraestrutura trabalhando juntos em projetos reais."
            },
            paths: {
                eyebrow: "Atuação",
                title: "Escolha o ponto de partida.",
                lead: "Criação, evolução ou análise técnica: cada caminho mostra onde posso entrar no seu projeto.",
                ctaTitle: "Tem algo parado ou uma ideia nova?",
                ctaText: "Me mande o cenário e eu respondo com um caminho prático para começar.",
                primaryCta: "Quero conversar",
                secondaryCta: "Ver cases reais"
            },
            services: {
                eyebrow: "Serviços",
                title: "Sites, sistemas e manutenção com cara profissional.",
                lead: "Construo, ajusto e mantenho produtos digitais com foco em visual, performance e evolução simples.",
                ctaTitle: "Precisa corrigir, modernizar ou criar do zero?",
                ctaText: "Se já existe, eu melhoro. Se ainda é ideia, eu ajudo a publicar.",
                primaryCta: "Solicitar diagnóstico",
                secondaryCta: "Como eu entrego"
            },
            workflow: {
                eyebrow: "Entrega",
                title: "Da ideia ao ar, sem enrolação.",
                lead: "Entendo o cenário, desenho o caminho, construo e deixo pronto para publicar ou evoluir.",
                ctaText: "Site parado, WordPress precisando de ajuste, sistema legado ou ideia nova? Vamos organizar o próximo passo.",
                cta: "Chamar no WhatsApp"
            },
            projects: {
                eyebrow: "Projetos",
                title: "Projetos selecionados",
                lead: "Cases reais com interface, integrações, responsividade e cuidado de manutenção.",
                featured: "Projeto em destaque",
                viewDetails: "Ver detalhes",
                talkToMe: "Quero algo parecido",
                openProject: "Acessar projeto",
                download: "Baixar arquivo",
                imageCounter: "Imagem {current} de {total}",
                talkSimilar: "Conversar sobre algo parecido",
                ctaTitle: "Gostou de algum caminho parecido?",
                ctaText: "Podemos partir de um case existente para estimar uma versão para sua empresa, seu sistema ou seu site.",
                primaryCta: "Pedir uma proposta",
                secondaryCta: "Comparar serviços",
                empty: "Nenhum projeto encontrado neste filtro."
            },
            contact: {
                eyebrow: "Contato",
                title: "Vamos construir algo útil.",
                lead: "Estou aberto a oportunidades profissionais, projetos freelance e boas conversas sobre software. Se você precisa de site, sistema web, WordPress, manutenção, Delphi, integração ou apoio full stack, me chame com uma descrição rápida do cenário e do objetivo.",
                whatsapp: "Enviar mensagem",
                resume: "Baixar currículo",
                email: "E-mail",
                phone: "Telefone",
                location: "Localização",
                whatsappMessage: "Olá! Vi seu portfólio e quero conversar sobre site, sistema, WordPress, manutenção ou Delphi.",
                formTitle: "Conte o cenário",
                formLead: "Preencha o básico e eu monto a conversa inicial para o WhatsApp.",
                nameLabel: "Nome",
                namePlaceholder: "Seu nome",
                emailLabel: "E-mail",
                emailPlaceholder: "voce@email.com",
                projectTypeLabel: "Tipo de projeto",
                projectTypePlaceholder: "Selecione uma opção",
                typeSite: "Site / landing page",
                typeSystem: "Sistema web",
                typeWordPress: "WordPress / CMS",
                typeMaintenance: "Manutenção / legado",
                typeIntegration: "Integração / automação",
                messageLabel: "Resumo do projeto",
                messagePlaceholder: "Ex: preciso modernizar um site, criar um sistema interno ou integrar uma rotina existente...",
                formNote: "Nada é enviado automaticamente. O botão abre o WhatsApp com a mensagem pronta.",
                formSubmit: "Montar mensagem",
                formMessageIntro: "Olá! Vi seu portfólio e quero conversar sobre um projeto.",
                formMessageName: "Nome",
                formMessageEmail: "E-mail",
                formMessageType: "Tipo",
                formMessageDetails: "Detalhes",
                highlightOneTitle: "Diagnóstico direto",
                highlightOneText: "Entendo objetivo, urgência e tecnologia atual antes de sugerir o caminho.",
                highlightTwoTitle: "Entrega publicável",
                highlightTwoText: "Visual, responsividade, performance e manutenção entram juntos.",
                highlightThreeTitle: "Do zero ou evolução",
                highlightThreeText: "Projeto novo, WordPress, legado Delphi ou melhoria em algo que já existe."
            },
            footer: {
                tagline: "Sites, sistemas, manutenção, WordPress, integrações e código full stack com apresentação profissional.",
                copyright: "© {year} Vinicius Augusto dos Santos. Todos os direitos reservados."
            },
            philosophy: {
                eyebrow: "/ Filosofia",
                title: "Bom software deve parecer confiável de um jeito quase óbvio.",
                lead: "Código não precisa parecer complexo para resolver problemas complexos."
            }
        },
        en: {
            documentTitle: "Vinicius Augusto | Mid-level Full Stack Developer",
            metaDescription: "Vinicius Augusto dos Santos, a full stack developer in Mococa, Brazil. Angular, NestJS, Node.js, TypeScript, integrations, automation and software development.",
            nav: {
                about: "About",
                experience: "Experience",
                stack: "Stack",
                projects: "Projects",
                contact: "Contact"
            },
            navCta: "Quote",
            floatingCta: "WhatsApp me",
            themeLabel: {
                light: "Enable light theme",
                dark: "Enable dark theme"
            },
            menu: {
                open: "Open menu",
                close: "Close menu"
            },
            hero: {
                eyebrow: "Vinicius Augusto dos Santos",
                name: "Vinicius Augusto dos Santos",
                titleStart: "Websites, systems,",
                titleEnd: "and automations that solve.",
                role: "Mid-level Full Stack Developer focused on backend, integrations and automation.",
                lead: "I work on web, desktop and mobile applications, APIs and business systems. Angular, NestJS, Node.js and TypeScript are part of my core stack, alongside Delphi, Python and databases.",
                purposeTitle: "The point of this portfolio",
                purposeText: "To show I can take a real problem, organize the path, and deliver software that is publishable, polished, and easy to maintain.",
                pointOne: "Create websites and landing pages with professional visuals and conversion focus",
                pointTwo: "Build web systems, dashboards, and internal flows that reduce manual work",
                pointThree: "Modernize WordPress, Delphi legacy, APIs, integrations, and automations",
                primaryCta: "View cases",
                secondaryCta: "Request a quote",
                tertiaryCta: "Understand stack",
                availability: "Brazil / 2026 - available for freelance projects, improvements, and full stack opportunities",
                scrollCta: "Scroll to explore ↓"
            },
            impact: {
                eyebrow: "Selected impact",
                title: "Less friction. More working software.",
                lead: "Healthcare, mobility, insurance, recruiting, WordPress, Delphi, and automation projects built for clarity, operations, and maintenance."
            },
            about: {
                eyebrow: "About",
                title: "More than code: simple systems for complex problems.",
                paragraphOne: "I'm a software developer in Mococa, Brazil, with a degree in Systems Analysis and Development. My experience spans web, desktop and mobile applications, business systems, insurance and payments.",
                paragraphTwo: "I develop APIs, integrations, RPA, document automation and asynchronous processes. I also work with real-time communication, dashboards and production application maintenance.",
                paragraphThree: "I worked in technical support and customer service before moving into development at PSZ Sistemas. That experience helps me understand the problem behind each request and build maintainable solutions.",
                skillsTitle: "Skills",
                educationTitle: "Education"
            },
            experience: {
                eyebrow: "Experience",
                title: "Experience applied to real products.",
                lead: "From Santa Casa to Trusom innovation and PSZ Sistemas: development, support, integrations and automation in real operations.",
                watermark: "Experience"
            },
            stack: {
                eyebrow: "Stack / technology map",
                title: "A stack for shipping ideas.",
                lead: "Frontend, backend, data, automation, and infrastructure working together in real projects."
            },
            paths: {
                eyebrow: "Work",
                title: "Choose the starting point.",
                lead: "Build, improve, or evaluate: each path shows where I can enter your project.",
                ctaTitle: "Have a stalled project or a new idea?",
                ctaText: "Send me the context and I will reply with a practical starting path.",
                primaryCta: "Start a conversation",
                secondaryCta: "View real cases"
            },
            services: {
                eyebrow: "Services",
                title: "Websites, systems, and maintenance with professional polish.",
                lead: "I build, adjust, and maintain digital products focused on visuals, performance, and simple evolution.",
                ctaTitle: "Need to fix, modernize, or build from scratch?",
                ctaText: "If it exists, I improve it. If it is still an idea, I help publish it.",
                primaryCta: "Request diagnosis",
                secondaryCta: "How I deliver"
            },
            workflow: {
                eyebrow: "Delivery",
                title: "From idea to live, without noise.",
                lead: "I understand the context, shape the path, build, and leave it ready to publish or evolve.",
                ctaText: "Stalled website, WordPress fixes, legacy system, or a new idea? Let us organize the next step.",
                cta: "Message on WhatsApp"
            },
            projects: {
                eyebrow: "Projects",
                title: "Selected projects",
                lead: "Real cases with interfaces, integrations, responsiveness, and maintenance care.",
                featured: "Featured project",
                viewDetails: "View details",
                talkToMe: "I want something similar",
                openProject: "Open project",
                download: "Download file",
                imageCounter: "Image {current} of {total}",
                talkSimilar: "Talk about something similar",
                ctaTitle: "Did one of these directions fit?",
                ctaText: "We can start from an existing case to estimate a version for your business, system, or website.",
                primaryCta: "Request a proposal",
                secondaryCta: "Compare services",
                empty: "No projects found for this filter."
            },
            contact: {
                eyebrow: "Contact",
                title: "Let us build something useful.",
                lead: "I am open to professional opportunities, freelance projects, and good conversations about software. If you need a website, web system, WordPress, maintenance, Delphi, integration, or full stack support, send me a short description of the context and goal.",
                whatsapp: "Send message",
                resume: "Download resume",
                email: "Email",
                phone: "Phone",
                location: "Location",
                whatsappMessage: "Hi! I saw your portfolio and want to talk about a website, system, WordPress, maintenance, or Delphi.",
                formTitle: "Share the context",
                formLead: "Fill in the basics and I will prepare the first WhatsApp message.",
                nameLabel: "Name",
                namePlaceholder: "Your name",
                emailLabel: "Email",
                emailPlaceholder: "you@email.com",
                projectTypeLabel: "Project type",
                projectTypePlaceholder: "Choose an option",
                typeSite: "Website / landing page",
                typeSystem: "Web system",
                typeWordPress: "WordPress / CMS",
                typeMaintenance: "Maintenance / legacy",
                typeIntegration: "Integration / automation",
                messageLabel: "Project summary",
                messagePlaceholder: "Example: I need to modernize a website, create an internal system, or integrate an existing workflow...",
                formNote: "Nothing is sent automatically. The button opens WhatsApp with the message ready.",
                formSubmit: "Prepare message",
                formMessageIntro: "Hi! I saw your portfolio and want to talk about a project.",
                formMessageName: "Name",
                formMessageEmail: "Email",
                formMessageType: "Type",
                formMessageDetails: "Details",
                highlightOneTitle: "Direct diagnosis",
                highlightOneText: "I understand the goal, urgency, and current tech before suggesting a path.",
                highlightTwoTitle: "Ready to publish",
                highlightTwoText: "Visual polish, responsiveness, performance, and maintenance move together.",
                highlightThreeTitle: "New build or evolution",
                highlightThreeText: "New project, WordPress, Delphi legacy, or improvements to something live."
            },
            footer: {
                tagline: "Websites, systems, maintenance, WordPress, integrations, and full stack code with professional presentation.",
                copyright: "© {year} Vinicius Augusto dos Santos. All rights reserved."
            },
            philosophy: {
                eyebrow: "/ Philosophy",
                title: "Good software should feel boringly reliable.",
                lead: "Code does not need to look complex to solve complex problems."
            }
        }
    },
    filters: [
        {
            id: "all",
            label: {
                pt: "Todos",
                en: "All"
            }
        },
        {
            id: "sites",
            label: {
                pt: "Sites/CMS",
                en: "Sites/CMS"
            }
        },
        {
            id: "systems",
            label: {
                pt: "Sistemas",
                en: "Systems"
            }
        },
        {
            id: "game",
            label: {
                pt: "Jogos/2D",
                en: "Games/2D"
            }
        }
    ],
    skills: [
        {
            title: {
                pt: "Frontend",
                en: "Frontend"
            },
            items: ["Angular", "TypeScript", "Vue.js", "React", "JavaScript", "HTML", "CSS"]
        },
        {
            title: {
                pt: "Backend",
                en: "Backend"
            },
            items: ["Node.js", "NestJS", "Express", "TypeORM", "PHP", "Python", "Go", "REST APIs"]
        },
        {
            title: {
                pt: "CMS e WordPress",
                en: "CMS and WordPress"
            },
            items: {
                pt: ["WordPress", "PHP", "CMS personalizados", "Manutenção de aplicações"],
                en: ["WordPress", "PHP", "Custom CMS", "Application maintenance"]
            }
        },
        {
            title: {
                pt: "Delphi e legado",
                en: "Delphi and legacy"
            },
            items: {
                pt: ["Delphi", "Object Pascal", "Firebird", "Integração com ERP", "Migração de dados"],
                en: ["Delphi", "Object Pascal", "Firebird", "ERP integration", "Data migration"]
            }
        },
        {
            title: {
                pt: "Dados e integrações",
                en: "Data and integrations"
            },
            items: {
                pt: ["MySQL", "PostgreSQL", "SQLite", "Firebase", "WhatsApp", "Mercado Pago", "Asaas"],
                en: ["MySQL", "PostgreSQL", "SQLite", "Firebase", "WhatsApp", "Mercado Pago", "Asaas"]
            }
        },
        {
            title: {
                pt: "Web, desktop e mobile",
                en: "Web, desktop and mobile"
            },
            items: {
                pt: ["Electron", "Capacitor", "Componentes reutilizáveis", "Formulários dinâmicos", "Dashboards"],
                en: ["Electron", "Capacitor", "Reusable components", "Dynamic forms", "Dashboards"]
            }
        },
        {
            title: {
                pt: "Automação e processamento",
                en: "Automation and processing"
            },
            items: {
                pt: ["RPA", "Redis", "BullMQ", "Socket.IO", "WebSockets", "PDFKit", "Playwright"],
                en: ["RPA", "Redis", "BullMQ", "Socket.IO", "WebSockets", "PDFKit", "Playwright"]
            }
        },
        {
            title: {
                pt: "Infraestrutura e entrega",
                en: "Infrastructure and delivery"
            },
            items: {
                pt: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "CI/CD", "Git", "VPS"],
                en: ["Docker", "Docker Compose", "Nginx", "GitHub Actions", "CI/CD", "Git", "VPS"]
            }
        }
    ],
    education: [
        {
            title: {
                pt: "Técnico em Desenvolvimento de Sistemas",
                en: "Technical degree in Systems Development"
            },
            place: "Eletrô Etec João Baptista De Lima Figueiredo",
            period: {
                pt: "Jan 2020 — Dez 2022",
                en: "Jan 2020 — Dec 2022"
            }
        },
        {
            title: {
                pt: "Análise e Desenvolvimento de Sistemas",
                en: "Systems Analysis and Development"
            },
            place: "Faculdade de Tecnologia de São Paulo - FATEC-SP",
            period: {
                pt: "Jan 2023 — Dez 2024",
                en: "Jan 2023 — Dec 2024"
            }
        }
    ],
    services: [
        {
            icon: "./assets/icons/web.png",
            title: {
                pt: "Desenvolvimento web",
                en: "Web development"
            },
            description: {
                pt: "Criação de sites e aplicações responsivas, com interface bem organizada, boa performance e estrutura preparada para evolução.",
                en: "Responsive websites and applications with organized interfaces, strong performance, and structure prepared to evolve."
            },
            tags: {
                pt: ["Sites", "Apps web", "Responsivo"],
                en: ["Websites", "Web apps", "Responsive"]
            }
        },
        {
            icon: "./assets/icons/page.png",
            title: {
                pt: "Landing pages",
                en: "Landing pages"
            },
            description: {
                pt: "Páginas focadas em apresentação profissional, conversão e credibilidade, com carregamento leve e conteúdo direto.",
                en: "Pages focused on professional presentation, conversion, and credibility with lightweight loading and direct content."
            },
            tags: {
                pt: ["Captação", "Oferta", "CTA"],
                en: ["Lead capture", "Offer", "CTA"]
            }
        },
        {
            icon: "./assets/icons/page.png",
            title: {
                pt: "WordPress e CMS",
                en: "WordPress and CMS"
            },
            description: {
                pt: "Criação, ajustes, manutenção e evolução de páginas em WordPress, com atenção a layout, plugins, conteúdo, SEO técnico e performance.",
                en: "Creation, fixes, maintenance, and evolution of WordPress pages with attention to layout, plugins, content, technical SEO, and performance."
            },
            tags: {
                pt: ["WordPress", "Elementor", "Plugins"],
                en: ["WordPress", "Elementor", "Plugins"]
            }
        },
        {
            icon: "./assets/icons/ecommerce.png",
            title: {
                pt: "E-commerce",
                en: "E-commerce"
            },
            description: {
                pt: "Interfaces para venda online com navegação objetiva, catálogo organizado e fluxo pensado para reduzir atrito na compra.",
                en: "Online sales interfaces with clear navigation, organized catalogs, and flows designed to reduce purchase friction."
            },
            tags: {
                pt: ["Catálogo", "Checkout", "Produtos"],
                en: ["Catalog", "Checkout", "Products"]
            }
        },
        {
            icon: "./assets/icons/seguranca.png",
            title: {
                pt: "Sistemas internos",
                en: "Internal systems"
            },
            description: {
                pt: "Painéis, automações e ferramentas internas para equipes, priorizando fluxo de trabalho, dados, permissões e segurança.",
                en: "Dashboards, automations, and internal tools for teams, prioritizing workflow, data, permissions, and security."
            },
            tags: {
                pt: ["Dashboards", "Permissões", "Fluxos"],
                en: ["Dashboards", "Permissions", "Flows"]
            }
        },
        {
            icon: "./assets/icons/manu.png",
            title: {
                pt: "Manutenção evolutiva",
                en: "Product maintenance"
            },
            description: {
                pt: "Correções, melhorias, atualização visual, novas funcionalidades, revisão de performance e organização de bases existentes.",
                en: "Fixes, improvements, visual updates, new features, performance review, and organization of existing codebases."
            },
            tags: {
                pt: ["Correções", "Performance", "Evolução"],
                en: ["Fixes", "Performance", "Evolution"]
            }
        },
        {
            icon: "./assets/icons/seguranca.png",
            title: {
                pt: "Delphi e sistemas legados",
                en: "Delphi and legacy systems"
            },
            description: {
                pt: "Apoio em manutenção, melhorias e integração de sistemas existentes em Delphi, especialmente quando precisam conversar com banco de dados ou web.",
                en: "Support for maintenance, improvements, and integration of existing Delphi systems, especially when they need to connect with databases or web systems."
            },
            tags: {
                pt: ["Delphi", "Firebird", "Integração"],
                en: ["Delphi", "Firebird", "Integration"]
            }
        },
        {
            icon: "./assets/icons/web.png",
            title: {
                pt: "APIs e integrações",
                en: "APIs and integrations"
            },
            description: {
                pt: "Conexões entre sistemas, formulários, bancos de dados, automações e serviços externos para reduzir retrabalho e centralizar informação.",
                en: "Connections between systems, forms, databases, automations, and external services to reduce rework and centralize information."
            },
            tags: {
                pt: ["REST", "Dados", "Automação"],
                en: ["REST", "Data", "Automation"]
            }
        },
        {
            icon: "./assets/icons/game.png",
            title: {
                pt: "Jogos e experiências",
                en: "Games and experiences"
            },
            description: {
                pt: "Protótipos e jogos 2D com foco em interação, pixel art, narrativa simples e boa sensação de controle.",
                en: "2D prototypes and games focused on interaction, pixel art, simple storytelling, and satisfying controls."
            },
            tags: {
                pt: ["GameMaker", "Pixel art", "2D"],
                en: ["GameMaker", "Pixel art", "2D"]
            }
        }
    ],
    workflow: [
        {
            step: "01",
            icon: "search",
            title: {
                pt: "Diagnóstico",
                en: "Discovery"
            },
            description: {
                pt: "Entendo objetivo, público, urgência, conteúdo, tecnologia atual e pontos que estão travando o projeto.",
                en: "I understand the goal, audience, urgency, content, current technology, and the points blocking the project."
            }
        },
        {
            step: "02",
            icon: "map",
            title: {
                pt: "Plano enxuto",
                en: "Lean plan"
            },
            description: {
                pt: "Defino escopo, prioridades, telas, integrações e caminho de entrega para evitar retrabalho.",
                en: "I define scope, priorities, screens, integrations, and delivery path to avoid rework."
            }
        },
        {
            step: "03",
            icon: "code",
            title: {
                pt: "Construção",
                en: "Build"
            },
            description: {
                pt: "Desenvolvo a interface, regras, dados, ajustes responsivos, performance e detalhes de interação.",
                en: "I build the interface, rules, data, responsive adjustments, performance, and interaction details."
            }
        },
        {
            step: "04",
            icon: "rocket",
            title: {
                pt: "Publicação e suporte",
                en: "Launch and support"
            },
            description: {
                pt: "Faço a entrega com revisão, publicação, ajustes finais e espaço para manutenção evolutiva.",
                en: "I deliver with review, publishing, final refinements, and room for ongoing maintenance."
            }
        }
    ],
    recentHighlights: [
        {
            id: "gerenciador-convenios",
            title: {
                pt: "Gerenciador de Convênios",
                en: "Benefits Management System"
            },
            description: {
                pt: "Sistema em produção para associados, fornecedores, vendas, limites, parcelas e retornos da folha. Inclui migração e conciliação de dados, relatórios financeiros e deploy automático em ambientes separados de homologação e produção.",
                en: "Production system for members, suppliers, sales, credit limits, installments and payroll returns. Includes data migration and reconciliation, financial reports and automated deployment to separate staging and production environments."
            },
            stack: ["Angular", "NestJS", "TypeScript", "TypeORM", "MySQL", "Redis", "BullMQ", "Socket.IO", "PDFKit", "Docker", "GitHub Actions"],
            role: {
                pt: "Desenvolvimento full stack, migração de dados, implantação e automação de deploy.",
                en: "Full stack development, data migration, deployment and release automation."
            }
        },
        {
            id: "vyntra",
            title: {
                pt: "Vyntra",
                en: "Vyntra"
            },
            description: {
                pt: "Base full stack reutilizável para web, desktop e mobile. Compartilha contratos entre frontend e backend e reúne componentes configuráveis, autenticação, uploads, filas e alertas em tempo real, com adapters para cada plataforma.",
                en: "Reusable full stack foundation for web, desktop and mobile. Shares contracts across frontend and backend and provides configurable components, authentication, uploads, queues and real-time alerts, with adapters for each platform."
            },
            stack: ["Angular", "NestJS", "TypeScript", "TypeORM", "Redis", "BullMQ", "Socket.IO", "Electron", "Capacitor", "SQLite", "MySQL"],
            role: {
                pt: "Arquitetura e desenvolvimento da base full stack e dos componentes reutilizáveis.",
                en: "Architecture and development of the full stack foundation and reusable components."
            }
        },
        {
            id: "menu-tv-erp",
            title: {
                pt: "Menu TV integrado ao ERP",
                en: "ERP-integrated TV Menu"
            },
            description: {
                pt: "Produtos, promoções e configurações sincronizados do ERP para menus exibidos em TVs. Cada dispositivo é vinculado por um código no primeiro acesso, e um mesmo menu pode ser usado em várias televisões.",
                en: "Products, promotions and settings synchronized from an ERP to menus displayed on TVs. Each device is linked with a code on first access, and the same menu can be used across multiple televisions."
            },
            stack: ["Delphi", "Firebase", "Web", "ERP"],
            role: {
                pt: "Vinicius: integração do ERP em Delphi e sincronização de dados. Gabriel Souza: página de exibição e conexão com o Firebase.",
                en: "Vinicius: Delphi ERP integration and data synchronization. Gabriel Souza: display page and Firebase connection."
            }
        }
    ],
    projects: [
        {
            id: "prontuarios-santa-casa",
            category: "systems",
            cover: "./assets/images/optimized/prontuarios-cover.jpg",
            title: {
                pt: "Solicitação de prontuários",
                en: "Medical record requests"
            },
            subtitle: {
                pt: "Sistema web para automatizar solicitações e acompanhamento de prontuários.",
                en: "Web system to automate requests and tracking for medical records."
            },
            description: {
                pt: "Plataforma para pacientes e colaboradores acompanharem solicitações de prontuários online, reduzindo fricção operacional e centralizando o atendimento.",
                en: "Platform for patients and staff to manage online medical record requests, reducing operational friction and centralizing service."
            },
            year: "2024",
            tags: {
                pt: ["Web", "Fluxo interno", "Saúde"],
                en: ["Web", "Internal flow", "Healthcare"]
            },
            images: [
                "./assets/images/santacasa1.jpg",
                "./assets/images/santacasa2.jpg",
                "./assets/images/santacasa3.jpg",
                "./assets/images/santacasa4.jpg"
            ],
            links: [
                {
                    type: "external",
                    url: "https://prontuarios.santacasamococa.org.br"
                }
            ]
        },
        {
            id: "eletrove",
            category: "game",
            cover: "./assets/images/optimized/eletrove-cover.jpg",
            title: {
                pt: "Eletrove",
                en: "Eletrove"
            },
            subtitle: {
                pt: "Jogo 2D em pixel art criado como projeto final de curso técnico.",
                en: "2D pixel art game created as a final technical course project."
            },
            description: {
                pt: "Aventura em pixel art feita em equipe, com fases, narrativa escolar e desafios para criar uma experiência completa de jogo 2D.",
                en: "Team-built pixel art adventure with levels, school-themed storytelling, and challenges designed as a complete 2D game experience."
            },
            year: "2022",
            tags: ["GameMaker", "Pixel art", "2D"],
            images: [
                "./assets/images/eletrove.jpg",
                "./assets/images/eletrove2.jpg",
                "./assets/images/eletrove3.jpg",
                "./assets/images/eletrove4.jpg",
                "./assets/images/eletrove5.jpg",
                "./assets/images/eletrove6.jpg",
                "./assets/images/eletrove7.jpg",
                "./assets/images/eletrove8.jpg",
                "./assets/images/eletrove9.jpg",
                "./assets/images/eletrove10.jpg",
                "./assets/images/eletrove11.jpg",
                "./assets/images/eletrove12.jpg",
                "./assets/images/eletrove13.jpg"
            ],
            links: [
                {
                    type: "download",
                    url: "./assets/files/Eletrove-Banca.rar"
                }
            ]
        },
        {
            id: "encontrando-fretes",
            category: "sites",
            cover: "./assets/images/optimized/encontrando-fretes-cover.jpg",
            title: {
                pt: "Encontrando Fretes",
                en: "Encontrando Fretes"
            },
            subtitle: {
                pt: "Plataforma web para conectar motoristas autônomos e empresas.",
                en: "Web platform connecting freelance drivers and companies."
            },
            description: {
                pt: "Solução para otimizar a busca, negociação e comunicação entre transportadores e empresas que precisam movimentar mercadorias.",
                en: "Solution to optimize discovery, negotiation, and communication between carriers and companies that need freight transport."
            },
            year: "2024",
            tags: {
                pt: ["Marketplace", "Logística", "Web"],
                en: ["Marketplace", "Logistics", "Web"]
            },
            images: [
                "./assets/images/encontrandoFretes1.jpg",
                "./assets/images/encontrandoFretes2.jpg",
                "./assets/images/encontrandoFretes3.jpg",
                "./assets/images/encontrandoFretes4.jpg",
                "./assets/images/encontrandoFretes5.jpg",
                "./assets/images/encontrandoFretes6.jpg",
                "./assets/images/encontrandoFretes7.jpg",
                "./assets/images/encontrandoFretes8.jpg",
                "./assets/images/encontrandoFretes9.jpg"
            ],
            links: [
                {
                    type: "external",
                    url: "https://encontrandofretes.com"
                }
            ]
        },
        {
            id: "site-santa-casa",
            category: "sites",
            cover: "./assets/images/optimized/santa-casa-site-cover.jpg",
            title: {
                pt: "Site Institucional da Santa Casa",
                en: "Santa Casa institutional website"
            },
            subtitle: {
                pt: "Portal institucional para comunicação, notícias e serviços hospitalares.",
                en: "Institutional portal for communication, news, and hospital services."
            },
            description: {
                pt: "Site público com navegação objetiva para informações institucionais, notícias, serviços e comunicados da Santa Casa de Mococa.",
                en: "Public website with clear navigation for institutional information, news, services, and announcements from Santa Casa de Mococa."
            },
            year: "2024",
            tags: {
                pt: ["Institucional", "CMS", "Saúde"],
                en: ["Institutional", "CMS", "Healthcare"]
            },
            images: [
                "./assets/images/santacasaSite1.jpg",
                "./assets/images/santacasaSite2.jpg",
                "./assets/images/santacasaSite3.jpg",
                "./assets/images/santacasaSite4.jpg",
                "./assets/images/santacasaSite5.jpg",
                "./assets/images/santacasaSite6.jpg",
                "./assets/images/santacasaSite7.jpg",
                "./assets/images/santacasaSite8.jpg",
                "./assets/images/santacasaSite9.jpg",
                "./assets/images/santacasaSite10.jpg",
                "./assets/images/santacasaSite11.jpg",
                "./assets/images/santacasaSite12.jpg",
                "./assets/images/santacasaSite13.jpg"
            ],
            links: [
                {
                    type: "external",
                    url: "https://santacasamococa.org.br"
                }
            ]
        },
        {
            id: "cms-santa-casa",
            category: "systems",
            cover: "./assets/images/optimized/cms-santa-casa-cover.jpg",
            title: {
                pt: "CMS da Santa Casa",
                en: "Santa Casa CMS"
            },
            subtitle: {
                pt: "Painel interno para gerenciar conteúdos do site institucional.",
                en: "Internal dashboard to manage institutional website content."
            },
            description: {
                pt: "Sistema administrativo exclusivo para colaboradores, criado para editar e organizar conteúdos exibidos no portal institucional com mais autonomia.",
                en: "Private administrative system for staff, created to edit and organize institutional portal content with more autonomy."
            },
            year: "2024",
            tags: {
                pt: ["Dashboard", "Admin", "Conteúdo"],
                en: ["Dashboard", "Admin", "Content"]
            },
            images: [
                "./assets/images/cmsSantaCasa1.jpg",
                "./assets/images/cmsSantaCasa2.jpg",
                "./assets/images/cmsSantaCasa3.jpg",
                "./assets/images/cmsSantaCasa4.jpg",
                "./assets/images/cmsSantaCasa5.jpg",
                "./assets/images/cmsSantaCasa6.jpg",
                "./assets/images/cmsSantaCasa7.jpg",
                "./assets/images/cmsSantaCasa8.jpg"
            ],
            links: []
        },
        {
            id: "banco-talentos",
            category: "systems",
            cover: "./assets/images/optimized/talentos-cover.jpg",
            title: {
                pt: "Banco de Talentos",
                en: "Talent Pool"
            },
            subtitle: {
                pt: "Sistema de recrutamento para candidatos e equipe interna.",
                en: "Recruiting system for applicants and internal staff."
            },
            description: {
                pt: "Plataforma para conectar candidatos a oportunidades da instituição, com fluxo voltado ao cadastro, triagem e acompanhamento de talentos.",
                en: "Platform connecting applicants to institutional opportunities, with flows for registration, screening, and talent tracking."
            },
            year: "2024",
            tags: {
                pt: ["Recrutamento", "Dashboard", "Saúde"],
                en: ["Recruiting", "Dashboard", "Healthcare"]
            },
            images: [
                "./assets/images/talentos1.jpg",
                "./assets/images/talentos2.jpg",
                "./assets/images/talentos3.jpg",
                "./assets/images/talentos4.jpg",
                "./assets/images/talentos5.jpg",
                "./assets/images/talentos6.jpg",
                "./assets/images/talentos7.jpg",
                "./assets/images/talentos8.jpg",
                "./assets/images/talentos9.jpg",
                "./assets/images/talentos10.jpg",
                "./assets/images/talentos11.jpg",
                "./assets/images/talentos12.jpg",
                "./assets/images/talentos13.jpg",
                "./assets/images/talentos14.jpg",
                "./assets/images/talentos15.jpg",
                "./assets/images/talentos16.jpg",
                "./assets/images/talentos17.jpg",
                "./assets/images/talentos18.jpg"
            ],
            links: [
                {
                    type: "external",
                    url: "https://talentos.santacasamococa.org.br"
                }
            ]
        },
        {
            id: "truhail",
            category: "systems",
            cover: "./assets/images/optimized/truhail-real.png",
            title: {
                pt: "TruHail",
                en: "TruHail"
            },
            subtitle: {
                pt: "Plataforma de mobilidade com aplicativos conectados em tempo real.",
                en: "Mobility platform with real-time connected applications."
            },
            description: {
                pt: "Plataforma de mobilidade com API, comunicação em tempo real, painel operacional e aplicativos móveis dedicados para motorista e passageiro. Atuação full stack na integração dos fluxos, mapas e estados da corrida.",
                en: "Mobility platform with an API, real-time communication, operations dashboard, and dedicated mobile apps for drivers and riders. Full stack work connecting ride flows, maps, and trip states."
            },
            year: "2026",
            tags: {
                pt: ["React Native", "Node.js", "Tempo real", "Mapas"],
                en: ["React Native", "Node.js", "Real time", "Maps"]
            },
            images: [
                "./assets/images/optimized/truhail-real.png"
            ],
            links: []
        },
        {
            id: "smartrent",
            category: "systems",
            cover: "./assets/images/optimized/smartrent-real.png",
            title: {
                pt: "SmartRent",
                en: "SmartRent"
            },
            subtitle: {
                pt: "Plataforma de gestão imobiliária para locações e operações.",
                en: "Property management platform for rentals and operations."
            },
            description: {
                pt: "Sistema full stack para organizar imóveis, locações, usuários, documentos e pagamentos, com áreas para operação, proprietários e inquilinos. Inclui filas de e-mail, upload de arquivos e regras de acesso.",
                en: "Full stack system for managing properties, rentals, users, documents, and payments, with spaces for operations, owners, and tenants. Includes email queues, file uploads, and access rules."
            },
            year: "2025",
            tags: {
                pt: ["NestJS", "Angular", "Mobile", "Pagamentos"],
                en: ["NestJS", "Angular", "Mobile", "Payments"]
            },
            images: [
                "./assets/images/optimized/smartrent-real.png"
            ],
            links: []
        },
        {
            id: "multicalculo",
            category: "systems",
            cover: "./assets/images/optimized/multicalculo-real.png",
            title: {
                pt: "MultiCálculo",
                en: "MultiCálculo"
            },
            subtitle: {
                pt: "Plataforma de cotações e cálculos para operações de seguros.",
                en: "Quoting and calculation platform for insurance operations."
            },
            description: {
                pt: "Sistema de negócio com painel Angular e API NestJS/GraphQL para centralizar cotações, cálculos, integrações e documentos. A solução combina regras de domínio, autenticação, armazenamento de arquivos e fluxos operacionais.",
                en: "Business system with an Angular dashboard and NestJS/GraphQL API to centralize quotes, calculations, integrations, and documents. The solution combines domain rules, authentication, file storage, and operational flows."
            },
            year: "2025",
            tags: {
                pt: ["Angular", "NestJS", "GraphQL", "Seguros"],
                en: ["Angular", "NestJS", "GraphQL", "Insurance"]
            },
            images: [
                "./assets/images/optimized/multicalculo-real.png"
            ],
            links: []
        },
        {
            id: "ninestacks",
            category: "systems",
            cover: "./assets/images/optimized/ninestacks-real.png",
            title: {
                pt: "NINEstacks",
                en: "NINEstacks"
            },
            subtitle: {
                pt: "Plataforma colaborativa de aprendizagem e projetos, desenvolvida em conjunto com a equipe da Nineworks.",
                en: "Collaborative learning and project platform developed together with the Nineworks team."
            },
            description: {
                pt: "Plataforma com autenticação, perfis, cursos, exercícios, publicação e exploração de projetos, favoritos e interação entre usuários. Atuação em conjunto com a equipe da Nineworks no desenvolvimento do produto.",
                en: "Platform with authentication, profiles, courses, exercises, project publishing and discovery, favorites, and user interaction. Collaborative work with the Nineworks team throughout product development."
            },
            year: "2025",
            tags: {
                pt: ["Angular", "NestJS", "Educação", "Comunidade"],
                en: ["Angular", "NestJS", "Learning", "Community"]
            },
            images: [
                "./assets/images/optimized/ninestacks-real.png"
            ],
            links: []
        },
        {
            id: "multicalculo-winbot",
            category: "systems",
            cover: "./assets/images/optimized/winbot-real.png",
            title: {
                pt: "Multicálculo Winbot",
                en: "Multicálculo Winbot"
            },
            subtitle: {
                pt: "Automação desktop para processamento de apólices em PDF.",
                en: "Desktop automation for processing policy PDFs."
            },
            description: {
                pt: "Aplicativo Electron + Angular que monitora uma pasta, identifica PDFs, coloca arquivos em fila, envia apólices automaticamente, reprocessa falhas e exibe progresso e status em tempo real.",
                en: "Electron + Angular app that watches a folder, identifies PDFs, queues files, uploads policies automatically, retries failures, and shows progress and real-time status."
            },
            year: "2026",
            tags: {
                pt: ["Electron", "Angular", "Automação", "Filas"],
                en: ["Electron", "Angular", "Automation", "Queues"]
            },
            images: [
                "./assets/images/optimized/winbot-real.png"
            ],
            links: []
        }
    ]
};
