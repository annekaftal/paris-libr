"use client";

export default function Filter({ handleChange }) {
  return (
    <select onChange={(e) => handleChange(e)}>
      <option className="text-3xl font-black">
        Trouve une librairie indépendante dans ton arrondissement
      </option>
      <option value="01">Paris 1e</option>
      <option value="02">Paris 2e</option>
      <option value="03">Paris 3e</option>
      <option value="04">Paris 4e</option>
      <option value="05">Paris 5e</option>
      <option value="06">Paris 6e</option>
      <option value="07">Paris 7e</option>
      <option value="08">Paris 8e</option>
      <option value="09">Paris 9e</option>
      <option value="10">Paris 10e</option>
      <option value="11">Paris 11e</option>
      <option value="12">Paris 12e</option>
      <option value="13">Paris 13e</option>
      <option value="14">Paris 14e</option>
      <option value="15">Paris 15e</option>
      <option value="16">Paris 16e</option>
      <option value="17">Paris 17e</option>
      <option value="18">Paris 18e</option>
      <option value="19">Paris 19e</option>
      <option value="20">Paris 20e</option>
    </select>
  );
}
