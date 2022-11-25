import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FaqAccordion = () => {
    return (
        <section className='faq-accordion'>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Azəriqaz smart kartıma yüklədiyim qazı sayğaca köçürdüm, sayğacda qazın olduğu görünür, lakin qaz gəlmir. Nə edim?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Çox güman ki, bu zaman sayğacınızın monitorunda “X” işarəsi görsənir və ya “alarm” sözü yazılıb, bu isə sayğacınızın blokda olduğunu bildirir. Xahiş edirik, bu məsələ ilə əlaqədar Azəriqaza müraciət edəsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Azəriqaz smart kartıma yüklədiyim qazı sayğacıma köçürdüm. Sayğacımda qazın həcmi “ 0 m3&nbsp;” görünür, lakin qaz gəlir. Bunun səbəbi nədir?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Xahiş edirik, bu məsələ ilə əlaqədar Azəriqaza müraciət edəsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Azəriqaz smart kartı köşkə saldım. Ekranda "kartınız blokdadır" yazıldı. Bu nə deməkdir?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Çox güman ki, borcunuz olduğundan, Azəriqaz kartınızı bloka salıb. Xahiş edirik, bu məsələ ilə əlaqədar Azəriqaza müraciət edəsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>eManat köşkündə ilk dəfə ödəniş edəcəm, çətinlik çəksəm nə edim?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        eManat köşkləri vasitəsilə ödəniş etmək olduqca asandır. Ekranda yazılan və səslə müşayiət edilən təlimatlara diqqətlə əməl etməklə, siz ödənişinizi bir neçə saniyədə tamamlayacaqsınız. Bundan əlavə, siz hər zaman eManat müştəri xidmətlərinə zəng edib, köməklik istəyə bilərsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Ödənişin uğurla həyata keçməyindən əmin deyiləm. Nə edim?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Əgər qəbzinizdə “Ödənişiniz uğurla başa çatdı. Xidmətimizdən istiadə etdiyiniz üçün təşəkkür edirik” yazılıbsa, bu ödənişinizin uğurla həyata keçdiyini bildirir. Bundan əlavə, siz müştəri xidmətlərimizə zəng etməklə və qəbzdə yazılan məlumatları söyləməklə də, ödənişinizin keçib-keçmədiyini dəqiqləşdirə bilərsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Ödəniş zamanı, abunə nömrəsini səhv yığdım və yalnış hesaba ödəniş etdim. Nə edim?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Xahiş edirik, müştəri xidmətlərimizə müraciət edəsiniz. Biz sizin ödəniş barəsində provayderdən məlumat alacaq və ödənişinizin ləğv edilib pulunuzun qaytarılmasını təmin edəcəyik.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Ödəniş qəbzini niyə və nə vaxta kimi saxlamalıyam?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Ödənişin hesabınıza köçürüldüyünə əmin olana kimi qəbzi saxlamağınız xahiş olunur. Əgər ödəniş hesaba hələ köçürülməyibsə və ya ödənişlə bağlı hər hansı digər problem varsa, qəbz ödənişin baş verməsini təsdiqləyir, ödənişlə bağlı bizə və xidmət təminatçısına ətraflı məlumat verir və problemin aradan qaldırılmasına yardım edir.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>eManat köşklərində ancaq nağd ödəyə bilərəm?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Bəli, hazırda eManat köşkləri vasitəsilə ancaq nağd ödənişlər etmək mümkündür, lakin gələcəkdə, siz kredit və debit kart vasitəsilə də xidmətlərin haqqını ödəyə biləcəksiniz
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>eManat köşklərində ancaq nağd ödəyə bilərəmeManat köşkü qalıq qaytarırmı?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Xeyr, eManat köşkü qalıq qaytarmır, lakin artıq ödədiyiniz məbləğ provayder tərəfdən sizin balansınıza əlavə olunur və növbəti ödənişlərdə nəzərə alınır.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>eManat köşkündə ödəniş edərkən, məndən komissiya tutulurmu?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Xeyr, eManat köşkündən istifadə tamamilə pulsuzdur. Siz yalnız, müştərisi olduğunuz provayderin xidmət haqqını ödəyirsiniz.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </section>
    )
}

export default FaqAccordion