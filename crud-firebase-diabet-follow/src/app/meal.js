"use client";
import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import * as XLSX from "xlsx";

const exportToXLSX = (data) => {
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  const wbout = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  const blob = new Blob([wbout], { type: "application/octet-stream" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "data.xlsx";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

function Meal() {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [text5, setText5] = useState("");
  const [text6, setText6] = useState("");
  const [text7, setText7] = useState("");
  const [text8, setText8] = useState("");
  const [text9, setText9] = useState("");
  const [items, setItems] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [radioValue, setRadioValue] = useState("");
  const [radioValue2, setRadioValue2] = useState("");
  const [radioValue3, setRadioValue3] = useState("");
  const [radioValue4, setRadioValue4] = useState("");
  const [radioValue5, setRadioValue5] = useState("");
  const [radioValue6, setRadioValue6] = useState("");
  const [radioValue7, setRadioValue7] = useState("");
  const [radioValue8, setRadioValue8] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [comboValue, setComboValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [operationTimestamp, setOperationTimestamp] = useState(
    new Date().toISOString()
  );
  const [lastUpdatedTimestamp, setLastUpdatedTimestamp] = useState(
    new Date().toISOString()
  );

  // Filter state
  const [textFilter, setTextFilter] = useState("");
  const [radioFilter, setRadioFilter] = useState("");
  const [checkboxFilter, setCheckboxFilter] = useState("");
  const [comboFilter, setComboFilter] = useState("");
  const [textareaFilter, setTextareaFilter] = useState("");
  const [operationFilter, setOperationFilter] = useState("");
  const [lastUpdatedFilter, setLastUpdatedFilter] = useState("");

  const [showHighSugar, setShowHighSugar] = useState(false);

  const handleClickHighSugar = () => {
    showHighSugar(!showMeal);
  };


  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleChange2 = (e) => {
    setText2(e.target.value);
  };

  const handleChange3 = (e) => {
    setText3(e.target.value);
  };

  const handleChange4 = (e) => {
    setText4(e.target.value);
  };

  const handleChange5 = (e) => {
    setText5(e.target.value);
  };

  const handleChange6 = (e) => {
    setText6(e.target.value);
  };

  const handleChange7 = (e) => {
    setText7(e.target.value);
  };

  const handleChange8 = (e) => {
    setText8(e.target.value);
  };

  const handleChange9 = (e) => {
    setText9(e.target.value);
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleRadioChange2 = (e) => {
    setRadioValue2(e.target.value);
  };

  const handleRadioChange3 = (e) => {
    setRadioValue3(e.target.value);
  };

  const handleRadioChange4 = (e) => {
    setRadioValue4(e.target.value);
  };

  const handleRadioChange5 = (e) => {
    setRadioValue5(e.target.value);
  };

  const handleRadioChange6 = (e) => {
    setRadioValue6(e.target.value);
    setShowHighSugar(!showHighSugar);
  };

  const handleRadioChange7 = (e) => {
    setRadioValue7(e.target.value);
  };

  const handleRadioChange8 = (e) => {
    setRadioValue8(e.target.value);
  };

  const handleCheckboxChange = () => {
    setCheckboxValue(!checkboxValue);
  };

  const handleComboChange = (e) => {
    setComboValue(e.target.value);
  };

  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const handleOperationTimestampChange = (e) => {
    setOperationTimestamp(e.target.value);
  };

  const handleCreate = async () => {
    if (text.trim()) {
      try {
        await addDoc(collection(db, "items"), {
          text,
          text2,
          text3,
          text4,
          text5,
          text6,
          text7,
          text8,
          text9,
          radioValue,
          radioValue2,
          radioValue3,
          radioValue4,
          radioValue5,
          radioValue6,
          radioValue7,
          radioValue8,
          checkboxValue,
          comboValue,
          textareaValue,
          operationTimestamp,
          lastUpdatedTimestamp: new Date().toISOString(),
        });
        setText("");
        setText2("");
        setText3("");
        setText4("");
        setText5("");
        setText6("");
        setText7("");
        setText8("");
        setText9("");
        setRadioValue("");
        setRadioValue2("");
        setRadioValue3("");
        setRadioValue4("");
        setRadioValue5("");
        setRadioValue6("");
        setRadioValue7("");
        setRadioValue8("");
        setCheckboxValue(false);
        setComboValue("");
        setTextareaValue("");
        setOperationTimestamp(new Date().toISOString());
        setLastUpdatedTimestamp(new Date().toISOString());
        handleRead();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const handleRead = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(data);
    } catch (error) {
      console.error("Error fetching documents: ", error);
    }
  };

  const handleUpdate = async () => {
    if (selectedId && text.trim()) {
      try {
        const docRef = doc(db, "items", selectedId);
        await updateDoc(docRef, {
          text,
          text2,
          text3,
          text4,
          text5,
          text6,
          text7,
          text8,
          text9,
          radioValue,
          radioValue2,
          radioValue3,
          radioValue4,
          radioValue5,
          radioValue6,
          radioValue7,
          radioValue8,
          checkboxValue,
          comboValue,
          textareaValue,
          operationTimestamp,
          lastUpdatedTimestamp: new Date().toISOString(),
        });
        setText("");
        setText2("");
        setText3("");
        setText4("");
        setText5("");
        setText6("");
        setText7("");
        setText8("");
        setText9("");
        setRadioValue("");
        setRadioValue2("");
        setRadioValue3("");
        setRadioValue4("");
        setRadioValue5("");
        setRadioValue6("");
        setRadioValue7("");
        setRadioValue8("");
        setCheckboxValue(false);
        setComboValue("");
        setTextareaValue("");
        setOperationTimestamp(new Date().toISOString());
        setLastUpdatedTimestamp(new Date().toISOString());
        setSelectedId(null);
        handleRead();
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "items", id));
      handleRead();
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  const handleExport = () => {
    exportToXLSX(items);
  };

  useEffect(() => {
    const now = new Date();
    // Türkiye saat dilimini (UTC+3) ekle
    const localTime = new Date(now.getTime() + 3 * 60 * 60 * 1000);
    // Tarih ve saati 'yyyy-MM-ddThh:mm' formatına dönüştür
    const formattedDatetime = localTime.toISOString().slice(0, 16);
    setOperationTimestamp(formattedDatetime);
    handleRead();
  }, []);

  const filteredItems = items.filter(
    (item) =>
      (!textFilter ||
        item.text.toLowerCase().includes(textFilter.toLowerCase())) &&
      (!radioFilter || item.radioValue === radioFilter) &&
      (checkboxFilter === "" ||
        item.checkboxValue === (checkboxFilter === "Checked")) &&
      (!comboFilter || item.comboValue === comboFilter) &&
      (!textareaFilter ||
        item.textareaValue
          .toLowerCase()
          .includes(textareaFilter.toLowerCase())) &&
      (!operationFilter ||
        new Date(item.operationTimestamp)
          .toLocaleDateString()
          .includes(operationFilter)) &&
      (!lastUpdatedFilter ||
        new Date(item.lastUpdatedTimestamp)
          .toLocaleDateString()
          .includes(lastUpdatedFilter))
  );

  return (
    <div style={{ padding: "20px" }}>
      <h3>Ölçüm, İlaç ve Beslenme Takibi</h3>

      <div style={{ marginTop: "10px" }}>
        <label>
          Date and Time:
          <input
            type="datetime-local"
            value={operationTimestamp}
            onChange={handleOperationTimestampChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>
      <br />

      <div>
        <label>
          <input
            type="radio"
            value="Kahvaltı"
            name="options"
            checked={radioValue === "Kahvaltı"}
            onChange={handleRadioChange}
          />
          Kahvaltı
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Öğle Yemeği"
            name="options"
            checked={radioValue2 === "Öğle Yemeği"}
            onChange={handleRadioChange2}
          />
          Öğle Yemeği
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Akşam Yemeği"
            name="options"
            checked={radioValue3 === "Akşam Yemeği"}
            onChange={handleRadioChange3}
          />
          Akşam Yemeği
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Ara Öğün"
            name="options"
            checked={radioValue4 === "Ara Öğün"}
            onChange={handleRadioChange4}
          />
          Ara Öğün
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Düşük Şeker"
            name="options"
            checked={radioValue5 === "Düşük Şeker"}
            onChange={handleRadioChange5}
          />
          Düşük Şeker
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Düşük Şeker"
            name="options"
            checked={radioValue6 === "Yüksek Şeker"}
            onChange={handleRadioChange6}
          />
          {showHighSugar ? 'Hide Yüksek Şeker' : 'Show Yüksek Şeker'}
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Lantus"
            name="options"
            checked={radioValue7 === "Lantus"}
            onChange={handleRadioChange7}
          />
          Lantus
        </label>
        <label style={{ marginLeft: "10px" }}>
          <input
            type="radio"
            value="Yatış"
            name="options"
            checked={radioValue8 === "Yatış"}
            onChange={handleRadioChange8}
          />
          Yatış
        </label>
      </div>

      <br />

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          
          <br />
        </div>

        <div>
          <div>
          {showHighSugar && <HighSugar text4={text4} text5={text5} text6={text6} handleChange4={handleChange4} handleChange5={handleChange5} handleChange6={handleChange6} comboValue={comboValue} handleComboChange={handleComboChange}/>}
          
          </div>

<br />


<div>
    <h4>Düşük Şeker</h4>
    <div>
    <label>
              Sensör :
              <input
                type="text5"
                value={text}
                onChange={handleChange5}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
              <label>
              Kan :
              <input
                type="text"
                value={text6}
                onChange={handleChange6}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
              <label>
                Sensör Hatası:
                <select
                  value={comboValue}
                  onChange={handleComboChange}
                  style={{ marginLeft: "10px" }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Combo Option 1">Yok</option>
                  <option value="Combo Option 2">Var</option>
                  <option value="Combo Option 3">Combo Option 3</option>
                </select>
              </label>
            </label>
            <div>
            <label>
              Toplam Karbonhidrat :
              <input
                type="text"
                value={text8}
                onChange={handleChange8}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
          </div>
    </div>
</div>


          <br />

          <div>
    <h4>Yatış</h4>
    <div>
    <label>
              Sensör :
              <input
                type="text5"
                value={text}
                onChange={handleChange5}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
              <label>
              Kan :
              <input
                type="text"
                value={text6}
                onChange={handleChange6}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
              <label>
                Sensör Hatası:
                <select
                  value={comboValue}
                  onChange={handleComboChange}
                  style={{ marginLeft: "10px" }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Combo Option 1">Yok</option>
                  <option value="Combo Option 2">Var</option>
                  <option value="Combo Option 3">Combo Option 3</option>
                </select>
              </label>
            </label>
            <div>
            <label>
              Toplam Karbonhidrat :
              <input
                type="text"
                value={text8}
                onChange={handleChange8}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
          </div>
    </div>
</div>
<br />

          <div>
            <div>
                <h4>Lantus</h4>
              <label>
                Lantus Dozu:
                <input
                  type="text"
                  value={text4}
                  onChange={handleChange4}
                  placeholder="Enter text"
                  style={{ marginRight: "10px" }}
                />
              </label>
            </div>
            <label>
              Lantus Bölgesi:
              <select
                value={comboValue}
                onChange={handleComboChange}
                style={{ marginLeft: "10px" }}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Combo Option 1">Seçiniz.</option>
                <option value="Combo Option 2">Sol Bacak</option>
                <option value="Combo Option 3">Sağ Bacak</option>
              </select>
            </label>
          </div>
          <br />

          <div>
            <h4>Öğün</h4>
            <div>
            <div>
              <label>
                İnsülin Dozu (Öğün):
                <input
                  type="text"
                  value={text}
                  onChange={handleChange}
                  placeholder="Enter text"
                  style={{ marginRight: "10px" }}
                />
              </label>
            </div>
            <div>
              <label>
                İnsülin Dozu (Yüksek Giriş):
                <input
                  type="text"
                  value={text2}
                  onChange={handleChange2}
                  placeholder="Enter text"
                  style={{ marginRight: "10px" }}
                />
              </label>
            </div>

            <div>
              <label>
                İnsülin Dozu (Toplam):
                <span
                  value={text3}
                  onChange={handleChange3}
                  style={{ marginRight: "10px" }}
                >
                  {+text + +text2}
                </span>
              </label>
            </div>
          </div>

            <label>
              Açlık Sensör Şeker Ölçümü :
              <input
                type="text5"
                value={text}
                onChange={handleChange5}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
              <label>
              Açlık Kan Şeker Ölçümü :
              <input
                type="text"
                value={text6}
                onChange={handleChange6}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
              <label>
                Hatalı mı:
                <select
                  value={comboValue}
                  onChange={handleComboChange}
                  style={{ marginLeft: "10px" }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Combo Option 1">Combo Option 1</option>
                  <option value="Combo Option 2">Combo Option 2</option>
                  <option value="Combo Option 3">Combo Option 3</option>
                </select>
              </label>
            </label>
          </div>
          <div>

          <div>
          <label>
              Tokluk Sensör Şeker Ölçümü :
              <input
                type="text5"
                value={text}
                onChange={handleChange5}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
              <label>
              Tokluk Kan Şeker Ölçümü :
              <input
                type="text"
                value={text6}
                onChange={handleChange6}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
              <label>
                Hatalı mı:
                <select
                  value={comboValue}
                  onChange={handleComboChange}
                  style={{ marginLeft: "10px" }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Combo Option 1">Combo Option 1</option>
                  <option value="Combo Option 2">Combo Option 2</option>
                  <option value="Combo Option 3">Combo Option 3</option>
                </select>
              </label>
            </label>
          </div>



          </div>
         
          <div>
            <label>
              Yemek Bekleme Dk. :
              <input
                type="text"
                value={text7}
                onChange={handleChange7}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
          </div>
          <div>
            <label>
              Toplam Karbonhidrat :
              <input
                type="text"
                value={text8}
                onChange={handleChange8}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
          </div>
          
        </div>
        <br />

  

        <div style={{ marginBottom: "20px" }}>
          <div style={{ marginTop: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
              Gano
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
              Keçiboynuzu
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
              Damla
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
              Çinko
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
              Çay
            </label>
            <label>
              <input
                type="checkbox"
                checked={checkboxValue}
                onChange={handleCheckboxChange}
              />
              Krem
            </label>
          </div>

          <div style={{ marginTop: "10px" }}></div>

          <div style={{ marginTop: "10px" }}>
            <label>
              Details:
              <textarea
                value={textareaValue}
                onChange={handleTextareaChange}
                placeholder="Enter more details here..."
                style={{ width: "100%", height: "100px", marginTop: "5px" }}
              />
            </label>
          </div>
        </div>
        <div>
          <button onClick={selectedId ? handleUpdate : handleCreate}>
            {selectedId ? "Update" : "Create"}
          </button>
          <button onClick={handleExport} style={{ marginLeft: "10px" }}>
            Export to XLSX
          </button>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Filters</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="Filter by Text"
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Filter by Radio"
            value={radioFilter}
            onChange={(e) => setRadioFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Filter by Checkbox (Checked/Unchecked)"
            value={checkboxFilter}
            onChange={(e) => setCheckboxFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Filter by Combo"
            value={comboFilter}
            onChange={(e) => setComboFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Filter by Textarea"
            value={textareaFilter}
            onChange={(e) => setTextareaFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Filter by Operation Date"
            value={operationFilter}
            onChange={(e) => setOperationFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
          <input
            type="text"
            placeholder="Filter by Last Updated Date"
            value={lastUpdatedFilter}
            onChange={(e) => setLastUpdatedFilter(e.target.value)}
            style={{ marginRight: "10px" }}
          />
        </div>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Operation Timestamp
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text2</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text3</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text4</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text5</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text6</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text7</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text8</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Text9</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Radio</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Checkbox
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Combobox
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Textarea
            </th>

            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Last Updated Timestamp
            </th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {new Date(item.operationTimestamp).toLocaleString()}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text2}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text3}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text4}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text5}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text6}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text7}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text8}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.text9}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.radioValue}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.checkboxValue ? "Checked" : "Unchecked"}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.comboValue}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {item.textareaValue}
                </td>

                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {new Date(item.lastUpdatedTimestamp).toLocaleString()}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "center",
                    }}
                  >
                    <button
                      onClick={() => {
                        setSelectedId(item.id);
                        setText(item.text);
                        setRadioValue(item.radioValue);
                        setCheckboxValue(item.checkboxValue);
                        setComboValue(item.comboValue);
                        setTextareaValue(item.textareaValue);
                        setOperationTimestamp(item.operationTimestamp);
                        setLastUpdatedTimestamp(item.lastUpdatedTimestamp);
                      }}
                      style={{ fontSize: "12px", padding: "5px 10px" }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{ fontSize: "12px", padding: "5px 10px" }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center", padding: "8px" }}>
                No items available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function HighSugar({text4,text5,text6,handleChange4,handleChange5,handleChange6,comboValue,handleComboChange}) {
    return (
        <div>
            <h4>Yüksek Şeker</h4>
          <label>
              Sensör :
              <input
                type="text5"
                value={text5}
                onChange={handleChange5}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
              <label>
              Kan :
              <input
                type="text"
                value={text6}
                onChange={handleChange6}
                placeholder="Enter text"
                style={{ marginRight: "10px" }}
              />
            </label>
              <label>
                Sensör Hatası:
                <select
                  value={comboValue}
                  onChange={handleComboChange}
                  style={{ marginLeft: "10px" }}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="Combo Option 1">Yok</option>
                  <option value="Combo Option 2">Var</option>
                  <option value="Combo Option 3">Combo Option 3</option>
                </select>
              </label>
            </label>
            <div>
              <label>
                İnsülin Dozu (Ek):
                <input
                  type="text"
                  value={text4}
                  onChange={handleChange4}
                  placeholder="Enter text"
                  style={{ marginRight: "10px" }}
                />
              </label>
            </div>
          </div>
    )
}





export default Meal;

