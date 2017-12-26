class AppData  {
    static appData() {
        const data = {
            categories: [
                {
                    name: 'መዝሙር',
                    questions: [
                        {
                            value: 50,
                            title: 'መዝሙር 50',
                            question: `ሃሩሩ ፡ በረደ ፡ ጥላ ፡ በዝቶ<br>
                            ከጥሜም ፡ እረካሁ ፡ ውኃ ፡ ፈልቆ<br>
                            በቃ ፡ ሲል ፡ አበቃ ፡ መጨነቄ<br>
                            አሻገርከኝ ፡ ያንን ፡ ዘመን ፡ ጌታዬ`,
                            answer: '',
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 150,
                            title: 'መዝሙር 150',
                            question: `ምንም ፡ ላላገኝ ፡ ከአንተ ፡ ርቄ ፡ ላይሆንልኝ<br>
                            ጥሜ ፡ ላይረካ ፡ የዓለም ፡ ኑሮ ፡ ላይፈይደኝ <br>
                            ከአንተ ፡ ወዴት ፡ እሄዳለሁኝ ፡ ኢየሱስ ፡ እንደ ፡ አንተ<br>
                            ለእኔ ፡ የሚሆን ፡ መቼም ፡ ቢሆን ፡ አላየሁኝ (፪x)`,
                            answer: '',
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 250,
                            title: 'መዝሙር 250',
                            question: `
                            ኧረ ፡ ይህን ፡ ኢየሱስ ፡ ምን ፡ ብዬ ፡ ልባርከው<br>
                            ውለታው ፡ በዛብኝ ፡ ከአይምሮዬም ፡ በላይ ፡ ነው<br>
                            አቤት ፡ ምህረቱ ፡ ምን ፡ እከፍለዋለሁ<br>
                            እኔም ፡ ክብር ፡ አግኝቼ ፡ አገልጋል ፡ ሆኛለሁ<br>
                            ይኸው ፡ እድረስልኝ ፡ ዛሬም ፡ ምሥጋናዬ ፡ ኤሄሄ<br>
                            ማለት ፡ ችያለሁኝ ፡ እኔም ፡ አባብዬ (፪x)`,
                            answer: '',
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 350,
                            title: 'መዝሙር 350',
                            question: `ዓለም ፡ ስትንጫጫ ፡ ወጀቧ ፡ ሲበዛ<br>
                            ለእኔ ፡ ግን ፡ አንተው ፡ ነህ ፡ የዘለዓለም ፡ ቤዛ<br>
                            መሸሸጊያየ ፡ ነህ ፡ ይሄው ፡ አስከዛሬ<br>
                            አሁንም ፡ አደራ ፡ አድርሰኝ ፡ አገሬ<br>`,
                            answer: '',
                            timeout: 60,
                            visited: false
                        }
                    ]
                },
                {
                    name: 'ጥቅስ',
                    questions: [
                        {
                            value: 50,
                            question: `የመንፈስ ፍሬ ግን ፍቅር፥ ደስታ፥ ሰላም፥ ትዕግሥት፥ ቸርነት፥ በጎነት፥ እምነት፥ የውሃት፥ ራስን መግዛት ነው። እንደዚህ ያሉትን የሚከለክል ሕግ የለም። የክርስቶስ ኢየሱስም የሆኑቱ…<br><br>

                            እንግዲህ በጊዜው ከፍ እንዲያደርጋችሁ ከኃይለኛው ከእግዚአብሔር
                            እጅ በታች ራሳችሁን አዋርዱ፤እርሱ ስለ እናንተ ያስባልና..<br><br>

                            እንግዲህ እንደ ጥበበኞች እንጂ ጥበብ እንደሌላቸው ሳይሆን እንዴት እንድትመላለሱ በጥንቃቄ ተጠበቁ፤<br><br>
                            `,
                            answer: `
                            ሥጋን ከክፉ መሻቱና ከምኞቱ ጋር ሰቀሉ። ገላ5:24<br><br>
                            የሚያስጨንቃችሁን ሁሉ በእርሱ ላይ ጣሉት።1ኛ ጴጥ 5:7<br><br>
                            ቀኖቹ ክፉዎች ናቸውና ዘመኑን ዋጁ። ኤፌ5:15
                            `,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 150,
                            question: `እግዚአብሔርንም የመምሰል ምሥጢር..<br><br>

                            በተወደደ ሰዓት ሰማሁህ በመዳንም ቀን ረዳሁህ ይላልና፤
                            እነሆ፥ የተወደደው ሰዓት አሁን ነው፤<br><br>

                            ነፍሱን ስለ ወዳጆቹ ከመስጠት ይልቅ..`,
                            answer: ` ..ያለ ጥርጥር ታላቅ ነው፤1ኛ ጢሞቴዎስ  3:16<br><br>

                            እነሆ፥ የመዳን ቀን አሁን ነው። 2ኛ ቆሮ. 6:2<br><br>

                            ከዚህ የሚበልጥ ፍቅር ለማንም የለውም። ዮሐ 15:13`,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 250,
                            question: `እግዚአብሔር የኃይልና የፍቅር ራስንም የመግዛት መንፈስ እንጂ..<br><br>

                            መዳንም በሌላ በማንም የለም፤ እንድንበት ዘንድ የሚገባን..<br><br>

                            የእግዚአብሔር ፈቃድ እርሱም በጎና ደስ የሚያሰኝ
ፍጹምም የሆነው ነገር ምን እንደ ሆነ ፈትናችሁ ታውቁ ዘንድ..`,
                            answer:`..የፍርሃት መንፈስ አልሰጠንምና። 2ኛ ወደ ጢሞቴዎስ  1:7<br><br>

                            ለሰዎች የተሰጠ ስም ከሰማይ በታች ሌላ የለምና። ሐዋ 4:12<br><br>

                            በልባችሁ መታደስ ተለወጡ እንጂ ይህን ዓለም አትምሰሉ።
ሮሜ 12:2`,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 350,
                            question: `የእግዚአብሔር መንግሥት ጽድቅና ሰላም በመንፈስ ቅዱስም የሆነ ደስታ ናት<br><br>

                            መቼም አይሁድ ምልክትን ይለምናሉ
                            የግሪክ ሰዎችም ጥበብን ይሻሉ፥<br><br>

                            አንተ የምትተኛ ንቃ..`,
                            answer: `እንጂ መብልና መጠጥ አይደለችምና። ሮሜ14:17<br><br>

                            እኛ ግን የተሰቀለውን ክርስቶስን እንሰብካለን፤ 1ኛ ቆሮ 1:23<br><br>

                             ከሙታንም ተነሣ ክርስቶስም ያበራልሃል ኤፌ5:14`,
                            timeout: 60,
                            visited: false
                        }
                    ]
                },
                {
                    name: 'ምልክት',
                    questions: [
                        {
                            value: 50,
                            question: `መጽሐፈ ሳሙኤል ቀዳማዊ 16፥23<br><br>
ዳዊት በገና ይዞ በእጁ ይመታ ነበር፤ ሳኦልንም ደስ ያሰኘው ያሳርፈውም ነበር፥ ክፉ መንፈስም ከእርሱ ይርቅ ነበር።`,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 150,
                            question: `አሮንና የእስራኤልም ልጆች ሁሉ ሙሴን ባዩ ጊዜ፥ እነሆ የፊቱ ቁርበት አንጸባረቀ ወደ እርሱም ይቀርቡ ዘንድ ፈሩ።<br><br>
                            ዘጸአት  34:29`,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 250,
                            question: `የሐዋርያት ሥራ  20:9<br><br>
                            አውጤኪስ የሚሉትም አንድ ጎበዝ በመስኮት ተቀምጦ ታላቅ እንቅልፍ አንቀላፍቶ ነበር፤
                            ጳውሎስም ነገርን ባስረዘመ ጊዜ እንቅልፍ ከብዶት ከሦስተኛው ደርብ ወደ ታች ወደቀ፥`,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 350,
                            question: `መጽሐፈ ነገሥት ካልዕ  2 :23<br>
                            ከዚያም [ኤልሳዕ] ወደ ቤቴል ወጣ፤ በመንገድም ሲወጣ ብላቴኖች ከከተማይቱ ወጥተው፦ አንተ መላጣ፥ ውጣ አንተ መላጣ፥ ውጣ ብለው አፌዙበት።
                            ዘወርም ብሎ አያቸው፥ በእግዚአብሔርም ስም ረገማቸው፤ ከዱርም ሁለት ድቦች ወጥተው ከብላቴኖች አርባ ሁለቱን ሰባበሩአቸው።
                            `,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        }
                    ]
                },
                {
                    name: 'ልዩ ልዩ',
                    questions: [
                        {
                            value: 50,
                            question: ``,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 150,
                            question: ``,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 250,
                            question: ``,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        },
                        {
                            value: 350,
                            question: ``,
                            answer: ``,
                            timeout: 60,
                            visited: false
                        }
                    ]
                },
            ]
        }

        return data;
    }
}

export default AppData;