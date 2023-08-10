import React from "react";
import "./SiparisFormu.css";
import * as yup from "yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const formSchema = yup.object().shape({
    pizzatype: yup.string().required("Seçim yapınız"),
    pizzasize: yup
        .string()
        .oneOf(["small", "medium", "big"], "Boyutlardan birini seçmelisiniz.")
        .required(),
    doughsize: yup
        .string()
        .oneOf(
            ["thin", "medium", "thick"],
            "Hamur boyutlarından birini seçmelisiniz."
        )
        .required(),
    cheddar: yup.boolean().oneOf([true, false], ""),
    pepper: yup.boolean().oneOf([true, false], ""),
    tomato: yup.boolean().oneOf([true, false], ""),
    sucuk: yup.boolean().oneOf([true, false], ""),
    onion: yup.boolean().oneOf([true, false], ""),
    chicken: yup.boolean().oneOf([true, false], ""),
    corn: yup.boolean().oneOf([true, false], ""),
    pineapple: yup.boolean().oneOf([true, false], ""),
    courgette: yup.boolean().oneOf([true, false], ""),
    mushroom: yup.boolean().oneOf([true, false], ""),
    tuna: yup.boolean().oneOf([true, false], ""),
    mint: yup.boolean().oneOf([true, false], ""),
    oregano: yup.boolean().oneOf([true, false], ""),
    sausage: yup.boolean().oneOf([true, false], ""),
    ham: yup.boolean().oneOf([true, false], ""),
    olive: yup.boolean().oneOf([true, false], ""),
    namesurname: yup
        .string()
        .min(2, "İsminiz en az 2 karakterden oluşmalıdır.")
        .required("İsim alanını doldurmak zorunludur."),
    address: yup
        .string()
        .required("Adres alanını doldurmak zorunludur")
        .min(5, "En az 5 karakter girilmelidir."),
    email: yup
        .string()
        .email()
        .required("Geçerli bir email giriniz."),
    quantity: yup.number().required("Lütfen siparişin kaç adet olduğunu belirtiniz!"),
    ordernote: yup.string(),
});

export default function Form() {
    const [form, setForm] = useState({
        pizzatype: "",
        pizzasize: "none",
        doughsize: "none",
        cheddar: false,
        pepper: false,
        tomato: false,
        sucuk: false,
        onion: false,
        chicken: false,
        corn: false,
        pineapple: false,
        courgette: false,
        mushroom: false,
        tuna: false,
        mint: false,
        oregano: false,
        sausage: false,
        ham: false,
        olive: false,
        quantity: "1",
        namesurname: "",
        address: "",
        email: "",
        ordernote: "",
    });

    const [error, setError] = useState({
        pizzatype: "",
        pizzasize: "",
        doughsize: "",
        cheddar: "",
        pepper: "",
        tomato: "",
        sucuk: "",
        onion: "",
        chicken: "",
        corn: "",
        pineapple: "",
        courgette: "",
        mushroom: "",
        tuna: "",
        mint: "",
        oregano: "",
        sausage: "",
        ham: "",
        olive: "",
        quantity: "",
        namesurname: "",
        address: "",
        email: "",
        ordernote: "",
    });

    const [buttonDisabledMi, setButtonDisabledMi] = useState(true);
    const history = useHistory();

   
    useEffect(() => {
        formSchema.isValid(form).then((valid) => setButtonDisabledMi(!valid));
    }, [form]);

    const checkFormError = (name, value) => {
        yup
            .reach(formSchema, name)
            .validate(value)
            .then(() => {
                setError({
                    ...error,
                    [name]: "",
                });
            })
            .catch((err) => {
                setError({
                    ...error,
                    [name]: err.message,
                });
            });
    };

    function handleChange(event) {
        const { name, value } = event.target;
        checkFormError(name, value);
        setForm({
            ...form,
            [name]: value,
        });
    }
    

    const totalPrice =
        (85.5 +
            Object.values(form).filter((value) => value === "false").length * 5) *
        form.quantity;

    function handleSubmit(event) {
        event.preventDefault();
        axios
            .post("https://reqres.in/api/users", form)
            .then((response) => {
                
                console.log("Sipariş başarıyla gönderildi:", response.data);
                setForm({
                    pizzatype: "",
                    pizzasize: "none",
                    doughsize: "none",
                    cheddar: false,
                    pepper: false,
                    tomato: false,
                    sucuk: false,
                    onion: false,
                    chicken: false,
                    corn: false,
                    pineapple: false,
                    courgette: false,
                    mushroom: false,
                    tuna: false,
                    mint: false,
                    oregano: false,
                    sausage: false,
                    ham: false,
                    olive: false,
                    quantity: "",
                    namesurname: "",
                    address: "",
                    email: "",
                    ordernote: "",
                });
                history.push("/success");
            })
            .catch((err) => console.log(err));
        console.error("Sipariş gönderilirken hata oluştu:", error);
    }
    
    return (
        <>
            <div className="formPart">
                <div className="positionAbsolute">
                    <h2 className="pizzaHeading">Position Absolute Acı Pizza</h2>
                    <div className="money">
                        <h3 className="bold">85,50 ₺</h3>
                        <p className="thin">4.9</p>
                        <p className="thin">(200)</p>
                    </div>
                    <p className="parag">
                        Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
                        pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
                        diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
                        ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
                        yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
                        kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
                        denir.
                    </p>
                    <hr size="3" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="formContent">
                        <div className="pizza_type">
                            <h3>
                                Pizza Çeşitini Seçiniz <span style={{ color: "red" }}>*</span>
                            </h3>
                            <label>
                                {" "}
                                <select
                                    id="type_dropdown"
                                    name="pizzatype"
                                    value={form.pizzatype}
                                    onChange={handleChange}
                                    className="select"
                                >
                                    
                                    <option value="">Seçiniz</option>
                                   <option value="sucuklu">Sucuklu Pizza</option>
                                    <option value="sebzeli">Etli Karışık Pizza</option>
                                    <option value="ucpeynirli"> Peynirli Pizza</option>
                                    
                                </select>
                            </label>
                            {error.pizzatype && <p>{error.pizzatype}</p>}
                        </div>
                        <div className="radio">
                            <div className="pizza_size">
                                <h3>
                                    Pizza Boyutu<span style={{ color: "red" }}>*</span>
                                </h3>
                                <label>
                                    <input
                                        type="radio"
                                        value="small"
                                        name="pizzasize"
                                        checked={form.pizzasize === "small"}
                                        onChange={handleChange}
                                    />{" "}
                                    Küçük Boy
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="medium"
                                        name="pizzasize"
                                        checked={form.pizzasize === "medium"}
                                        onChange={handleChange}
                                    />{" "}
                                    Orta Boy
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="big"
                                        name="pizzasize"
                                        checked={form.pizzasize === "big"}
                                        onChange={handleChange}
                                    />{" "}
                                    Büyük Boy
                                </label>
                                {error.pizzasize && <p>{error.pizzasize}</p>}
                            </div>
                            <div className="dough_size">
                                <h3>
                                    Hamur Kalınlığı<span style={{ color: "red" }}>*</span>
                                </h3>

                                <label>
                                    <input
                                        type="radio"
                                        value="thin"
                                        name="doughsize"
                                        checked={form.doughsize === "thin"}
                                        onChange={handleChange}
                                    />{" "}
                                    İnce
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="medium"
                                        name="doughsize"
                                        checked={form.doughsize === "medium"}
                                        onChange={handleChange}
                                    />{" "}
                                    Orta
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        value="thick"
                                        name="doughsize"
                                        checked={form.doughsize === "thick"}
                                        onChange={handleChange}
                                    />{" "}
                                    Kalın
                                </label>
                                {error.doughsize && <p>{error.doughsize}</p>}
                            </div>
                        </div>
                        <div className="ingredients">
                            <h3 className="headingIngredients">
                                Ek Malzemeleri Seçiniz (Her biri 5₺ )
                            </h3>
                            <div className="ingredientsContent">
                                <label>
                                    <input
                                        type="checkbox"
                                        name="cheddar"
                                        id="cheddar"
                                        value={form.cheddar}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Cheddar
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="pepper"
                                        id="pepper"
                                        value={form.pepper}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Biber
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="tomato"
                                        id="tomato"
                                        value={form.tomato}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Domates
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="sucuk"
                                        id="sucuk"
                                        value={form.sucuk}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Sucuk
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="onion"
                                        id="onion"
                                        value={form.onion}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Soğan
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="chicken"
                                        id="chicken"
                                        value={form.chicken}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Tavuk
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="corn"
                                        id="corn"
                                        value={form.corn}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Mısır
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="pineapple"
                                        id="pineapple"
                                        value={form.pineapple}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Ananas
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="courgette"
                                        id="courgette"
                                        value={form.courgette}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Kabak
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="mushroom"
                                        id="mushroom"
                                        value={form.mushroom}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Mantar
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="tuna"
                                        id="tuna"
                                        value={form.tuna}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Ton
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="mint"
                                        id="mint"
                                        value={form.mint}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Nane
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="oregano"
                                        id="oregano"
                                        value={form.oregano}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Kekik
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="sausage"
                                        id="sausage"
                                        value={form.sausage}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Sosis
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="ham"
                                        id="ham"
                                        value={form.ham}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Jambon
                                </label>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="olive"
                                        id="olive"
                                        value={form.olive}
                                        onChange={handleChange}
                                        className="check"
                                    />{" "}
                                    Zeytin
                                </label>{" "}
                            </div>
                        </div>

                        <div className="contact">
                            <h3>
                                İletişim Bilgilerinizi Giriniz{" "}
                                <span style={{ color: "red" }}>*</span>
                            </h3>

                            <label>
                               Adınız Soyadınız :
                                <br />
                                <input
                                    type="
                                    "
                                    name="namesurname"
                                    value={form.namesurname}
                                    onChange={handleChange}
                                    placeholder="Adınız Soyadınız"
                                />
                            </label>
                            {error.namesurname && <p>{error.namesurname}</p>}

                            <label>
                                Adresiniz :
                                <br />
                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    placeholder="Adresiniz"
                                />
                            </label>
                            {error.address && <p>{error.address}</p>}

                            <label>
                                Email Adresiniz :
                                <br />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email Adresiniz"
                                />
                            </label>
                            {error.email && <p>{error.email}</p>}
                        </div>
                        <div className="order_note">
                            <h3>Sipariş Notunuzu Giriniz</h3>
                            <label>
                                <input
                                    type="text"
                                    name="ordernote"
                                    value={form.ordernote}
                                    onChange={handleChange}
                                    placeholder="Sipariş Notunuz"
                                />
                            </label>
                        </div>
                        <div className="lastPart">
                            <div className="quantity">
                                <h3>
                                    Sipariş Adedini Seçiniz{" "}
                                    <span style={{ color: "red" }}>*</span>
                                </h3>
                                <label>
                                    {" "}
                                    <input
                                        type="number"
                                        name="quantity"
                                        min="1"
                                        max="5"
                                        value={form.quantity}
                                        onChange={handleChange}
                                    />
                                </label>
                                {error.quantity && <p>{error.quantity}</p>}
                            </div>
                            <div className="orderSum">
                                <h2>Sipariş Toplamı</h2>
                                <div className="summary1">
                                    <p>Seçimler</p>
                                    <p>85,5 ₺</p>
                                </div>
                                <div className="summary1">
                                    <p>Toplam</p>
                                    <p>{totalPrice} ₺</p>
                                </div>
                                <button
                                    className="order_button"
                                    type="submit"
                                    disabled={buttonDisabledMi}
                                >
                                    SİPARİŞİ GÖNDER
                                </button>{" "}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}