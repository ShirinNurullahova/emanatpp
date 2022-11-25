import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const CareerFaq = () => {
    return (
        <div className='career-faq'>
            <div className="career-faq-text">
                <h2>Tez-tez verilən suallar</h2>
            </div>
            <section className='career-faq-accordion'>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Öz vəzifəm üzrə hansı inkişaf planları var? Təlim xərcləri qarşılanırmı?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Hər departament və şöbə üzrə illik təlim büdcəsi ayrılır və əməkdaşların ildə 2 dəfə (öz ixtisası üzrə) təlim almaq imkanı var.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Sizcə namizədlərdə ən vacib xüsusiyyət hansıdır? (Siz namizəd seçərkən hansı xüsusiyyətlərə əhəmiyyət verirsiniz?)</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>

                            Biz hər bir namizədin bilik və bacarıqlarını əsas tutaraq işinə məsuliyyətli yanaşmasını, daim inkişafa meylli və işgüzar olmasını əsas tuturuq.                         </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Əməkdaşların qiymətləndirilməsi (vəzifə və əməkhaqqı artımı) neçə aydan bir olur? </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Əməkdaşların əməkhaqqı artımı hər ilin əvvəlində və fərdi qaydada performans əsasında həyata keçirilir.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>
                            İş saatlarınız dəyişkəndirmi?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Qrup halda fəaliyyət göstərməyən hər əməkdaş (şöbə rəhbərinin razılığı ilə) dəyişkən iş saatları ilə işləyə bilər.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>“Distant” işləmək imkanım varmı?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Bəli, ofisdə çalışan və fiziki işlə məşğul olmayan hər əməkdaş “distant” işləyə bilər.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>“Geyim kodeksi” (Dress code) tətbiq olunurmu?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            İnkassasiya qrupu və Müştəri xidmətləri ön masa əməkdaşlarından başqa heç bir əməkdaşa xüsusi “geyim kodeksi” tətbiq olunmur.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Bütün CV-lərə geridönüş edilir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Görüşdüyümüz bütün namizədlərə geridönüş edirik.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>İşə qəbul prosesiniz neçə etapdan ibarətdir?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            İşə qəbul prosesi əsasən 1 mərhələdən ibarət olur.
                        </Typography>
                    </AccordionDetails>
                </Accordion>


            </section>
        </div>
    )
}

export default CareerFaq