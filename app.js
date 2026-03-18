// Go Learning Path
const MODULES = [
    {
        "id": 1,
        "title": "Pengenalan Go",
        "icon": "fas fa-play-circle"
    },
    {
        "id": 2,
        "title": "Dasar",
        "icon": "fas fa-cube"
    },
    {
        "id": 3,
        "title": "Fungsi",
        "icon": "fas fa-code"
    },
    {
        "id": 4,
        "title": "Struktur Data",
        "icon": "fas fa-database"
    },
    {
        "id": 5,
        "title": "OOP & Concurrency",
        "icon": "fas fa-object-group"
    }
];
const lessons = [
    {
        "id": 1,
        "title": "1. Apa Itu Go",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/apa-itu-go.html",
        "description": "<p><strong>Apa Itu Go</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Apa Itu Go?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 2,
        "title": "2. Array",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/array.html",
        "description": "<p><strong>Array</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Array?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 3,
        "title": "3. Array Dan Slice",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/array-dan-slice.html",
        "description": "<p><strong>Array Dan Slice</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Array Dan Slice?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 4,
        "title": "4. Break Continue",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/break-continue.html",
        "description": "<p><strong>Break Continue</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Break Continue?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 5,
        "title": "5. Channel",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/channel.html",
        "description": "<p><strong>Channel</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Channel?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 6,
        "title": "6. Channel Dasar",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/channel-dasar.html",
        "description": "<p><strong>Channel Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Channel Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 7,
        "title": "7. Cli Application",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/cli-application.html",
        "description": "<p><strong>Cli Application</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Cli Application?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 8,
        "title": "8. Closure Dan Anonymous",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/closure-dan-anonymous.html",
        "description": "<p><strong>Closure Dan Anonymous</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Closure Dan Anonymous?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 9,
        "title": "9. Context Dan Timeout",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/context-dan-timeout.html",
        "description": "<p><strong>Context Dan Timeout</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Context Dan Timeout?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 10,
        "title": "10. Control Flow If Else",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/control-flow-if-else.html",
        "description": "<p><strong>Control Flow If Else</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Control Flow If Else?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 11,
        "title": "11. Custom Error",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/custom-error.html",
        "description": "<p><strong>Custom Error</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Custom Error?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 12,
        "title": "12. Defer Panic Recover",
        "module": "Pengenalan Go",
        "moduleId": 1,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/defer-panic-recover.html",
        "description": "<p><strong>Defer Panic Recover</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Defer Panic Recover?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 13,
        "title": "13. Embedding",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/embedding.html",
        "description": "<p><strong>Embedding</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Embedding?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 14,
        "title": "14. Error Handling",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/error-handling.html",
        "description": "<p><strong>Error Handling</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Error Handling?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 15,
        "title": "15. File Io",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/file-io.html",
        "description": "<p><strong>File Io</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di File Io?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 16,
        "title": "16. File Io Dasar",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/file-io-dasar.html",
        "description": "<p><strong>File Io Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di File Io Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 17,
        "title": "17. For Loop",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/for-loop.html",
        "description": "<p><strong>For Loop</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di For Loop?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 18,
        "title": "18. Fungsi Dasar",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/fungsi-dasar.html",
        "description": "<p><strong>Fungsi Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Fungsi Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 19,
        "title": "19. Generics Dasar",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/generics-dasar.html",
        "description": "<p><strong>Generics Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Generics Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 20,
        "title": "20. Goroutine",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/goroutine.html",
        "description": "<p><strong>Goroutine</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Goroutine?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 21,
        "title": "21. Goroutine Dasar",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/goroutine-dasar.html",
        "description": "<p><strong>Goroutine Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Goroutine Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 22,
        "title": "22. Hello World",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/hello-world.html",
        "description": "<p><strong>Hello World</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Hello World?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 23,
        "title": "23. Http Server Dasar",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/http-server-dasar.html",
        "description": "<p><strong>Http Server Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Http Server Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 24,
        "title": "24. If Else",
        "module": "Dasar",
        "moduleId": 2,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/if-else.html",
        "description": "<p><strong>If Else</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di If Else?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 25,
        "title": "25. Input Output",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/input-output.html",
        "description": "<p><strong>Input Output</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Input Output?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 26,
        "title": "26. Instalasi Dan Setup",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/instalasi-dan-setup.html",
        "description": "<p><strong>Instalasi Dan Setup</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Instalasi Dan Setup?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 27,
        "title": "27. Interface",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/interface.html",
        "description": "<p><strong>Interface</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Interface?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 28,
        "title": "28. Interface Dasar",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/interface-dasar.html",
        "description": "<p><strong>Interface Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Interface Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 29,
        "title": "29. Json Dan Encoding",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/json-dan-encoding.html",
        "description": "<p><strong>Json Dan Encoding</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Json Dan Encoding?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 30,
        "title": "30. Loop Dan Iterasi",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/loop-dan-iterasi.html",
        "description": "<p><strong>Loop Dan Iterasi</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Loop Dan Iterasi?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 31,
        "title": "31. Map",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/map.html",
        "description": "<p><strong>Map</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Map?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 32,
        "title": "32. Map Dan Key Value",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/map-dan-key-value.html",
        "description": "<p><strong>Map Dan Key Value</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Map Dan Key Value?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 33,
        "title": "33. Method",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/method.html",
        "description": "<p><strong>Method</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Method?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 34,
        "title": "34. Module Dan Dependency",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/module-dan-dependency.html",
        "description": "<p><strong>Module Dan Dependency</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Module Dan Dependency?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 35,
        "title": "35. Multiple Return",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/multiple-return.html",
        "description": "<p><strong>Multiple Return</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Multiple Return?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 36,
        "title": "36. Mutex Sync",
        "module": "Fungsi",
        "moduleId": 3,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/mutex-sync.html",
        "description": "<p><strong>Mutex Sync</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Mutex Sync?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 37,
        "title": "37. Operator",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/operator.html",
        "description": "<p><strong>Operator</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Operator?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 38,
        "title": "38. Operator Dan Ekspresi",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/operator-dan-ekspresi.html",
        "description": "<p><strong>Operator Dan Ekspresi</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Operator Dan Ekspresi?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 39,
        "title": "39. Package Dan Import",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/package-dan-import.html",
        "description": "<p><strong>Package Dan Import</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Package Dan Import?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 40,
        "title": "40. Pointer",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/pointer.html",
        "description": "<p><strong>Pointer</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Pointer?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 41,
        "title": "41. Pointer Dasar",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/pointer-dasar.html",
        "description": "<p><strong>Pointer Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Pointer Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 42,
        "title": "42. Reflection Dasar",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/reflection-dasar.html",
        "description": "<p><strong>Reflection Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Reflection Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 43,
        "title": "43. Rest Api Project",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/rest-api-project.html",
        "description": "<p><strong>Rest Api Project</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Rest Api Project?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 44,
        "title": "44. Select",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/select.html",
        "description": "<p><strong>Select</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Select?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 45,
        "title": "45. Select Dan Concurrency",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/select-dan-concurrency.html",
        "description": "<p><strong>Select Dan Concurrency</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Select Dan Concurrency?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 46,
        "title": "46. Slice",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/slice.html",
        "description": "<p><strong>Slice</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Slice?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 47,
        "title": "47. Struct",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/struct.html",
        "description": "<p><strong>Struct</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Struct?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 48,
        "title": "48. Struct Dan Method",
        "module": "Struktur Data",
        "moduleId": 4,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/struct-dan-method.html",
        "description": "<p><strong>Struct Dan Method</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Struct Dan Method?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 49,
        "title": "49. Switch",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/switch.html",
        "description": "<p><strong>Switch</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Switch?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 50,
        "title": "50. Switch Dan Select",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/switch-dan-select.html",
        "description": "<p><strong>Switch Dan Select</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Switch Dan Select?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 51,
        "title": "51. Testing Dasar",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/testing-dasar.html",
        "description": "<p><strong>Testing Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Testing Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 52,
        "title": "52. Tipe Data Dasar",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/tipe-data-dasar.html",
        "description": "<p><strong>Tipe Data Dasar</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Tipe Data Dasar?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 53,
        "title": "53. Tools Dan Editor",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/tools-dan-editor.html",
        "description": "<p><strong>Tools Dan Editor</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Tools Dan Editor?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 54,
        "title": "54. Variabel Dan Konstanta",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/variabel-dan-konstanta.html",
        "description": "<p><strong>Variabel Dan Konstanta</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel Dan Konstanta?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 55,
        "title": "55. Variabel Dan Tipe Data",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/variabel-dan-tipe-data.html",
        "description": "<p><strong>Variabel Dan Tipe Data</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Variabel Dan Tipe Data?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    },
    {
        "id": 56,
        "title": "56. Variadic Fungsi",
        "module": "OOP & Concurrency",
        "moduleId": 5,
        "mdFile": "https://raw.githubusercontent.com/personalbotai/go-learning-path/main/lessons/variadic-fungsi.html",
        "description": "<p><strong>Variadic Fungsi</strong></p>",
        "defaultCode": "package main\n\nimport \"fmt\"\n\nfunc main() {\n    fmt.Println(\"Hello, Go!\")\n}",
        "expectedOutput": "Hello, Go!",
        "hint": "Pelajari materi.",
        "quiz": {
            "question": "Apa yang dipelajari di Variadic Fungsi?",
            "options": [
                "A",
                "B",
                "C",
                "D"
            ],
            "answer": 0
        }
    }
];
let currentLesson=0;
let progress=JSON.parse(localStorage.getItem("go_progress")||"{}");
function renderNav() {
    const nav = document.getElementById('lessons-nav');
    nav.innerHTML = MODULES.map(mod => {
        const modLessons = lessons.filter(l => l.moduleId === mod.id);
        const completed = modLessons.filter(l => progress[l.id]).length;
        const isExpanded = mod.id === (Math.floor(currentLesson / 10) + 1);
        return `
            <div class="mb-3">
                <div class="flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-gray-300 cursor-pointer hover:text-white rounded hover:bg-gray-700/50" onclick="toggleModule(${mod.id})">
                    <span><i class="${mod.icon} mr-2 text-blue-400"></i>${mod.title}</span>
                    <span class="text-xs text-gray-500">${completed}/${modLessons.length}</span>
                </div>
                <div id="module-${mod.id}" class="space-y-0.5 mt-1 ${isExpanded ? '' : 'hidden'}">
                    ${modLessons.map(l => {
                        const idx = lessons.indexOf(l);
                        return `<button onclick="loadLesson(${idx})" 
                            class="w-full text-left px-3 py-1.5 rounded text-xs hover:bg-gray-700 transition 
                            ${idx === currentLesson ? 'lesson-active' : ''} 
                            ${progress[l.id] ? 'text-green-400' : 'text-gray-400'}">
                            <span class="mr-1">${progress[l.id] ? '✅' : '○'}</span>${l.title}
                        </button>`;
                    }).join('')}
                </div>
            </div>
        `;
    }).join('');
}

function toggleModule(modId) {
    const el = document.getElementById('module-' + modId);
    if (el) el.classList.toggle('hidden');
}

async function loadLesson(index) {
    currentLesson = index;
    const lesson = lessons[index];
    
    // Show loading
    document.getElementById('lesson-content').innerHTML = `<h2 class="text-xl font-bold mb-4">${lesson.title}</h2><div class="text-gray-400"><i class="fas fa-spinner fa-spin mr-2"></i>Loading...</div>`;
    
    // Fetch and render markdown from lessons folder
    let contentHtml = lesson.description || '';
    if (lesson.mdFile && typeof marked !== 'undefined') {
        try {
            const response = await fetch(lesson.mdFile);
            if (response.ok) {
                const mdText = await response.text();
                contentHtml = marked.parse(mdText);
            }
        } catch (e) {
            console.error('Error loading:', lesson.mdFile, e);
        }
    }
    
    document.getElementById('lesson-content').innerHTML = `
        <div class="text-xs text-gray-500 mb-2">${lesson.module || ''}</div>
        <h2 class="text-xl font-bold mb-4 text-white">${lesson.title}</h2>
        <div class="prose prose-invert prose-sm max-w-none leading-relaxed
            prose-headings:text-blue-300 prose-h2:text-lg prose-h2:mt-6 prose-h2:mb-3
            prose-h3:text-base prose-h3:mt-4 prose-h3:mb-2
            prose-p:text-gray-300 prose-p:mb-3
            prose-code:text-green-400 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
            prose-ul:text-gray-300 prose-li:mb-1
            prose-strong:text-white prose-a:text-blue-400">
            ${contentHtml}
        </div>`;
    document.getElementById('code-editor').value = (lesson.defaultCode || '').replace(/\\n/g, '\n');
    document.getElementById('output').innerHTML = '<span class="text-gray-500">// Output akan muncul di sini</span>';
    document.getElementById('validation-msg').className = 'mt-4 p-3 rounded hidden';
    if (lesson.quiz) {
        document.getElementById('quiz-section').classList.remove('hidden');
        document.getElementById('quiz-content').innerHTML = `<p class="font-medium">${lesson.quiz.question}</p><div class="space-y-2">${lesson.quiz.options.map((opt, i) => `<label class="flex items-center space-x-2 cursor-pointer"><input type="radio" name="quiz" value="${i}" class="text-blue-500"><span>${opt}</span></label>`).join('')}</div>`;
    } else { document.getElementById('quiz-section').classList.add('hidden'); }
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    // Update complete button
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    if (progress[lesson.id]) {
        completeBtn.style.display = 'none';
        completedBtn.style.display = 'block';
    } else {
        completeBtn.style.display = 'block';
        completedBtn.style.display = 'none';
    }
    
    // Update breadcrumb
    const mod = MODULES.find(m => m.id === lesson.moduleId);
    document.getElementById('breadcrumb').textContent = mod ? mod.title : '';
    
    // Update nav buttons
    document.getElementById('prev-btn').disabled = index === 0;
    document.getElementById('next-btn').disabled = index === lessons.length - 1;
    
    renderNav();
    window.scrollTo(0, 0);
}

// Overridden by Pyodide in index.html
// // runCode is overridden by Pyodide in index.html
async function runCode() {
    const output = document.getElementById('output');
    const validation = document.getElementById('validation-msg');
    const lesson = lessons[currentLesson];
    output.innerHTML = '<span class="text-green-400">' + escapeHtml(lesson.expectedOutput) + '</span>';
    validation.className = 'mt-4 p-3 rounded bg-blue-900/50 border border-blue-500 text-blue-300';
    validation.innerHTML = 'ℹ️ Go tidak bisa dijalankan di browser. Menampilkan output yang diharapkan.';
}

function resetCode() { document.getElementById('code-editor').value = lessons[currentLesson].defaultCode; }
function checkQuiz() {
    const selected = document.querySelector('input[name="quiz"]:checked');
    if (!selected) return alert('Pilih jawaban dulu!');
    const msg = document.createElement('div');
    msg.className = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? 'mt-3 p-3 rounded bg-green-900/50 border border-green-500 text-green-300' : 'mt-3 p-3 rounded bg-red-900/50 border border-red-500 text-red-300';
    msg.innerHTML = parseInt(selected.value) === lessons[currentLesson].quiz.answer ? '<i class="fas fa-check-circle mr-2"></i>Benar!' : '<i class="fas fa-times-circle mr-2"></i>Salah!';
    document.getElementById('quiz-content').appendChild(msg);
    setTimeout(() => msg.remove(), 3000);
}
function nextLesson() { if (currentLesson < lessons.length - 1) loadLesson(currentLesson + 1); }
function prevLesson() { if (currentLesson > 0) loadLesson(currentLesson - 1); }

function markComplete() {
    const lesson = lessons[currentLesson];
    progress[lesson.id] = true;
    localStorage.setItem('go_progress', JSON.stringify(progress));
    
    const completeBtn = document.getElementById('complete-btn');
    const completedBtn = document.getElementById('completed-btn');
    completeBtn.style.display = 'none';
    completedBtn.style.display = 'block';
    
    renderNav();
    
    // Auto-advance to next lesson
    if (currentLesson < lessons.length - 1) {
        setTimeout(() => loadLesson(currentLesson + 1), 500);
    }
}

function updateProgress() { const done = Object.keys(progress).length; const pct = Math.round((done / lessons.length) * 100); document.getElementById('course-progress').textContent = pct + '%'; document.getElementById('progress-fill').style.width = pct + '%'; }
function resetProgress() { if (!confirm('Reset semua progress?')) return; progress = {}; localStorage.removeItem('go_progress'); renderNav(); updateProgress(); }
function escapeHtml(str) { return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load progress from localStorage
    progress = JSON.parse(localStorage.getItem('go_progress') || '{}');
    
    // Render sidebar
    renderNav();
    
    // Load first lesson
    if (lessons.length > 0) {
        loadLesson(0);
    }
});
