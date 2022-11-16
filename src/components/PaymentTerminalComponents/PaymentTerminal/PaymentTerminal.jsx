import React, { useEffect, useState } from 'react'
import star from '../../../assets/img/shirin/required.png'
import plus from '../../../assets/img/shirin/plus.png'
import DropDown from '../DropDown/DropDown'
import '../../PaymentTerminalComponents/PaymentTerminal.scss'
// import DropDownOne from '../DropDown/DropDownOne'
// import DropDownTwo from '../DropDown/DropDownTwo'
// import DropDownThree from '../DropDown/DropDownThree'
// import DropDownFour from '../DropDown/DropDownFour'

const PaymentTerminal = () => {
   
    const [selected, setSelected] = useState("Secin")
    

    return (
        <div className='payment_terminal'>
            <div className='payment_terminal_div'>
                <div className='payment_terminal_div_h1'>
                    <h1> <span>Ödəniş</span> terminalı sifarişi</h1>
                </div>
                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_h2'>
                        <h2>İstifadəçi məlumatları</h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className="payment_terminal_div_form_element_div">
                            <label>Ad,Soyad<img className='star' src={star} /></label>
                            <input type="ad" placeholder='Ad, Soyad' name="" id="" />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Ata adı<img className='star' src={star} /></label>
                            <input type="ad" placeholder='' name="" id="" />
                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_h2'>
                        <h2>Müştəri <img className='star' src={star} /></h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="Sahibkar" name="İcarədar" value="" />
                            <label for="Sahibkar">Sahibkar</label>
                        </div>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="İcarədar" name="İcarədar" value="" />
                            <label for="İcarədar">İcarədar</label>
                        </div>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="Məsul şəxs" name="İcarədar" value="" />
                            <label for="Məsul şəxs">Məsul şəxs</label>
                        </div>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="Digər" name="İcarədar" value="" />
                            <label for="Digər">Digər</label>
                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_h2'>
                        <h2>Əlaqə</h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className="payment_terminal_div_form_element_div">
                            <label>Nömrə<img className='star' src={star} /></label>
                            <input type="ad" placeholder='+994' name="" id="" />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >E-poçt<img className='star' src={star} /></label>
                            <input type="ad" placeholder='user@mailcom' name="" id="" />
                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_h2'>
                        <h2>Obyekt</h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className="payment_terminal_div_form_element_div">
                            <label>Obyekt adı<img className='star' src={star} /></label>
                            <input type="ad" placeholder='' name="" id="" />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Şəhər<img className='star' src={star} /></label>
                            <DropDown selected={selected} setSelected={setSelected} options={[
                                "Ağcabədi", "Ağdam", "Ağdaş", "Ağsu", "Astara", "Babək", "Bakı", "Balakən", "Beyləqan", "Biləsuvar", "Bərdə", "Culfa", "Cəbrayıl", "Cəlilabad", "Daşkəsən", "Füzuli",
                                "Goranboy", "Göyçay", "Göygöl", "Gədəbəy", "Gəncə", "Hacıqabul", "İmişli", "İsmayıllı",
                                "Kürdəmir", "Kəlbəcər", "Kəngərli", "Laçın", "Lerik", "Lənkəran", "Masallı", "Mingəçevir",
                                "Naxçıvan", "Neftçala", "Oğuz", "Ordubad", "Qax", "Qazax", "Qobustan", "Quba", "Qubadlı",
                                "Qusar", "Qəbələ", "Saatlı", "Sabirabad", "Şabran", "Şahbuz", "Salyan", "Şamaxı", "Samux",
                                "Siyəzən", "Sumqayıt", "Şuşa", "Şəki", "Şəmkir", "Şərur", "Tovuz", "Tərtər", "Ucar",
                                "Xaçmaz", "Xırdalan", "Xızı", "Xocalı", "Xocavənd", "Xudat", "Yardımlı", "Yevlax",
                                "Zaqatala", "Zəngilan", "Zərdab"]}/>
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Qəsəbə və ya kənd<img className='star' src={star} /></label>
                            <input type="ad" placeholder='' name="" id="" />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Obyektin ünvanı<img className='star' src={star} /></label>
                            <input type="ad" placeholder='' name="" id="" />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Mesajınız</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Obyektin sahəsi<img className='star' src={star} /></label>
                            <input type="ad" placeholder='' name="" id="" />
                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_h2'>
                        <h2>Obyektin təhlükəsizliyi<img className='star' src={star} /></h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="Təhlükəsizlik kamerası" name="İcarədar" value="" />
                            <label for="Təhlükəsizlik kamerası">Təhlükəsizlik kamerası</label>
                        </div>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="Mühafizəçi" name="İcarədar" value="" />
                            <label for="Mühafizəçi">Mühafizəçi</label>
                        </div>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="Mühafizə polisi" name="İcarədar" value="" />
                            <label for="Mühafizə polisi">Mühafizə polisi</label>
                        </div>
                        <div className='payment_terminal_div_form_element_radio'>
                            <input type="radio" id="24 saat" name="İcarədar" value="" />
                            <label for="24 saat">24 saat</label>
                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_h2'>
                        <h2>İstifadəçi məlumatları</h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className="payment_terminal_div_form_element_div">
                            <label for="">Obyektdə digər ödəmə terminalları varmı?<img className='star' src={star} /></label>

                            <DropDown selected={selected} setSelected={setSelected} options={[
                                "Ağcabədi", "Ağdam", "Ağdaş", "Ağsu", "Astara", "Babək", "Bakı", "Balakən", "Beyləqan", "Biləsuvar", "Bərdə", "Culfa", "Cəbrayıl", "Cəlilabad", "Daşkəsən", "Füzuli",
                                "Goranboy", "Göyçay", "Göygöl", "Gədəbəy", "Gəncə", "Hacıqabul", "İmişli", "İsmayıllı",
                                "Kürdəmir", "Kəlbəcər", "Kəngərli", "Laçın", "Lerik", "Lənkəran", "Masallı", "Mingəçevir",
                                "Naxçıvan", "Neftçala", "Oğuz", "Ordubad", "Qax", "Qazax", "Qobustan", "Quba", "Qubadlı",
                                "Qusar", "Qəbələ", "Saatlı", "Sabirabad", "Şabran", "Şahbuz", "Salyan", "Şamaxı", "Samux",
                                "Siyəzən", "Sumqayıt", "Şuşa", "Şəki", "Şəmkir", "Şərur", "Tovuz", "Tərtər", "Ucar",
                                "Xaçmaz", "Xırdalan", "Xızı", "Xocalı", "Xocavənd", "Xudat", "Yardımlı", "Yevlax",
                                "Zaqatala", "Zəngilan", "Zərdab"]} />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Obyektdə daha öncə terminal olubmu?<img className='star' src={star} /></label>
                            <DropDown selected={selected} setSelected={setSelected} options={["Seçin", 'Bəli', 'Xeyr']} />
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Yaxın 500 metr məsafədə eManat Ödəmə terminalı varmı?<img className='star' src={star} /></label>                          
                        <DropDown selected={selected} setSelected={setSelected} options={["Seçin", 'Bəli', 'Xeyr']}/>
                        </div>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Ödəmə terminalının təmənnasız quraşdırılmasına razılıq verirsinizmi?<img className='star' src={star} /></label>                   
                             <DropDown selected={selected} setSelected={setSelected} options={["Seçin", 'Bəli', 'Xeyr']}/>

                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_form'>
                    <div className='payment_terminal_div_form_dif'>
                        <h2>Ödəmə terminalının təmənnasız quraşdırılmasına razılıq verilmiş şəxslərə üstünlük veriləcəkdir</h2>
                    </div>
                    <form className='payment_terminal_div_form_element'>
                        <div className="payment_terminal_div_form_element_div">
                            <label >Mesajınız</label>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                    </form>
                </div>

                <div className='payment_terminal_div_btn'>
                    <button>Göndər</button>
                </div>
            </div>

        </div>
    )
}

export default PaymentTerminal
