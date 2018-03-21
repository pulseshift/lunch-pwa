// Daten für Montag 19.03 bis Dienstag 27.03 inklusive Samstagsmenü
// Samstag nur mit Beilage und einem Mittagsmenü

export const state = {
    days: {
        '190193118711': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Kartoffelpüree',
                img: 'side',
                price: '2.10',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Nüsse',
                        type: 'N'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E' // da viel Arten von Geschmacksverstärkern mit E anfangen
                    }
                ]
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Rinderschmorbraten an Weißweinsoße mit Beilagensalat',
                img: 'main-dish',
                price: '4.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'S'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Gebackene Champignons mit Aioli-Creme',
                img: 'main-dish',
                price: '3.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Brownie',
                img: 'dessert',
                price: '1.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Eier',
                        type: 'I'
                    },
                    {
                        descr: 'Nüsse',
                        type: 'N'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ],
        '190193118712': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Spätzle',
                img: 'side',
                price: '1.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Eier',
                        type: 'I'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    }
                ]
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Schweineschnitzel Jägermeisterart',
                img: 'main-dish',
                price: '3.80',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Ravioli mit Steinpilzfüllung an Waldpilz-Kräuterrahmsauce ',
                img: 'main-dish',
                price: '3.80',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Grießpudding',
                img: 'dessert',
                price: '1.00',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    }
                ]
            }
        ],
        '190193118713': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Mandelreis',
                img: 'side',
                price: '2.10',
                allergies: [
                    {
                        descr: 'Nüsse',
                        type: 'N'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Putenoberkeulenbraten mit Rosmarinjus',
                img: 'main-dish',
                price: '3.80',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'S'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Veganes Thaicurry mit gebratenen Sojastreifen und frischem Wokgemüse',
                img: 'main-dish',
                price: '3.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    },
                    {
                        descr: 'Nüsse',
                        type: 'N'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Muffin',
                img: 'dessert',
                price: '1.50',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'G'
                    },
                    {
                        descr: 'Eier',
                        type: 'I'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ],
        '190193118714': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Dampfkartoffeln',
                img: 'side',
                price: '1.80',
                allergies: [],
                additives: []
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Grünkohl mit Mettenden von Schwein und Rind',
                img: 'main-dish',
                price: '4.00',
                allergies: [
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'S'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Mediteranes Gemüse in Olivenöl und Basilikum-Joghurt',
                img: 'main-dish',
                price: '3.90',
                allergies: [
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Obstsalat',
                img: 'dessert',
                price: '1.00',
                allergies: [
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ],
        '190193118715': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Bruscetta',
                img: 'side',
                price: '2.10',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Gegrillte Putenstreifen auf buntem Blattsalat mit gerösteten Walnüssen',
                img: 'main-dish',
                price: '4.20',
                allergies: [
                    {
                        descr: 'Nüsse',
                        type: 'N'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Weißwein-Risotto mit Frühlingszwieblen und Grana Padano',
                img: 'main-dish',
                price: '4.20',
                allergies: [
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Erdbeerquark',
                img: 'dessert',
                price: '1.00',
                allergies: [
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ],
        '190193118716': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Belegte Brötchen',
                img: 'side',
                price: '1.90',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'D'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Spagetthi Aioli',
                img: 'main-dish',
                price: '3.90',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ],
        '190193118718': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Kartoffelpüree',
                img: 'side',
                price: '2.10',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Nüsse',
                        type: 'N'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Rinderfirkadelle mit Zwiebelsoße',
                img: 'main-dish',
                price: '4.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'S'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Gemüselasagne',
                img: 'main-dish',
                price: '4.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    }
                ],
                additives: [
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Schokopudding',
                img: 'dessert',
                price: '1.20',
                allergies: [
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'S'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ],
        '190193118719': [
            {
                rank: 1,
                loc: 'Beilage',
                title: 'Basmatireis',
                img: 'side',
                price: '1.70',
                allergies: [],
                additives: []
            },
            {
                rank: 2,
                loc: 'Mittag Menü',
                title: 'Hähnchenschenkel in Rotweinsauce mit Perlzwiebeln und Champignons',
                img: 'main-dish',
                price: '4.20',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Selerie',
                        type: 'R'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'L'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            },
            {
                rank: 3,
                loc: 'Mittag Menü Vegetarisch',
                title: 'Veganer Brokkoli-Dinkel-Auflauf mit Tomatensauce ',
                img: 'main-dish',
                price: '4.20',
                allergies: [],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    }
                ]
            },
            {
                rank: 4,
                date: '',
                loc: 'Dessert',
                title: 'Rote Grütze mit Vanillesoße',
                img: 'dessert',
                price: '1.50',
                allergies: [
                    {
                        descr: 'Gluten',
                        type: 'G'
                    },
                    {
                        descr: 'Milch inkl. Laktose',
                        type: 'L'
                    },
                    {
                        descr: 'Schwefeldioxid und Sulfite',
                        type: 'S'
                    }
                ],
                additives: [
                    {
                        descr: 'Künstliche Farbstoffe',
                        type: 'K'
                    },
                    {
                        descr: 'Geschmacksverstärker',
                        type: 'E'
                    }
                ]
            }
        ]
    }
}
