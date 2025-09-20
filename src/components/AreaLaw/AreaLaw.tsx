"use client";
import React, { useState, useMemo } from "react";

const translations = {
  en: {
    title: "Tilottama Municipality",
    subtitle: "Financial Act of Tilottama Municipality",
    searchPlaceholder: "Search the document...",
    viewOriginal: "View Original",
    noResults: "No results found for your search and filter criteria.",
    languageLabel: "Language",
    languageName: "English",
    switchLangButton: "नेपाली",
    filterOptions: [
      { value: "", label: "All Content" },
      { value: "h2", label: "Main Sections" },
      { value: "h3", label: "Sub-sections" },
    ],
    actContent: `
    <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4"><strong>Tilottama Municipality</strong></h1>
    <p>
    The following Act, formulated by the <strong>Tilottama Municipal Executive</strong>, is hereby published for public information. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2"><strong>Act No. 1 of the year 2082</strong></h2>
    <h3 class="text-xl font-bold text-gray-300 mt-4 mb-2">Name of the Act: <strong>Tilottama Municipality Financial Act-2082</strong></h3>
    <p>
    Whereas it is desirable to implement the <strong>financial proposals</strong> of the <strong>Tilottama Municipality</strong> for the <strong>fiscal year 2082/083</strong> by collecting, exempting, and administering local taxes and fees, the second municipal assembly of Tilottama Municipality, in its seventh session, has enacted this Act in accordance with Sub-section (2) of Article 228 of the Constitution of Nepal. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">1. <strong>Short Title and Commencement:</strong></h2>
    <p>
    The short title of this Act shall be "<strong>Tilottama Municipality Financial Act, 2082.</strong>" <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <p>
    This Act shall come into effect within the Tilottama Municipality area from <strong>Shrawan 1, 2082</strong>, after being approved by the Municipal Assembly and published in the Local Gazette. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">2. <strong>Property Tax:</strong></h2>
    <p>
    <strong>Tilottama Municipality</strong> shall levy <strong>property tax</strong> within its jurisdiction as follows. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <p>
    <strong>Property tax</strong> shall be levied on houses built within the municipality's area and on land up to double the area occupied by the house. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <p>
    For the purpose of this section, 'house' shall mean a house, warehouse, hall, shed, or similar structure. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">View Original (p.1)</a>
    </p>
    <p>
    For the purpose of <strong>property tax</strong>, the minimum valuation rate of land shall be as per <strong>Annex 1 (a)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    For the purpose of <strong>property tax</strong>, depreciation shall be deducted from structures using the diminishing balance method. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    For the purpose of depreciation, the lifespan of the structure, the residual value at the end of its life, and the depreciation rate shall be as per <strong>Annex 2</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    <strong>Property tax</strong> shall be levied on the total assessed amount as per <strong>Annex 1</strong> and <strong>Annex 2</strong> at the rate specified in <strong>Annex (3)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    Additional provisions regarding <strong>property tax</strong> shall be as specified. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">3. <strong>Land Tax (Malpot):</strong></h2>
    <p>
    <strong>Tilottama Municipality</strong> shall levy <strong>land tax</strong> on land other than that specified for <strong>property tax</strong> under Section 1 within its jurisdiction. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    For the purpose of <strong>land tax</strong>, the minimum valuation rate of land shall be as per <strong>Annex 1 (b)</strong> of this Act. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    <strong>Land tax</strong> shall be levied on the total assessed amount as per <strong>Annex 1 (b)</strong> at the rate specified in <strong>Annex (3)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    Additional provisions regarding <strong>land tax</strong> shall be as specified. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    Since <strong>property tax</strong> and <strong>land tax</strong> have been in effect in this municipality from the fiscal year 2075/076, if anyone has <strong>land tax (Malpot)</strong> arrears up to the fiscal year 2074/075, the following rates of <strong>land tax (Malpot)</strong> and <strong>penalty</strong> shall be levied on such land: <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>Description of Land</strong></td>
    <td><strong>Per Katha Land Tax (Rs.)</strong></td>
    <td><strong>Penalty Per Year (%)</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>Up to 10 Dhur</td>
    <td>20.00</td>
    <td>20 percent</td>
    </tr>
    <tr>
    <td>More than 10 Dhur</td>
    <td>30.00</td>
    <td>20 percent</td>
    </tr>
    </tbody>
    </table>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">4. <strong>House and Land Rent Tax:</strong></h2>
    <p>
    <strong>Rent tax</strong> shall be levied on the income received from renting out a building, house, shop, garage, warehouse, shed, lean-to, land, or pond, either fully or partially, within the municipality area. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">View Original (p.2)</a>
    </p>
    <p>
    A <strong>rent tax of ten (10%) percent</strong> shall be levied on the rental income from renting to commercial corporate houses (business establishments, firms, cooperatives, and government offices that are required to undergo mandatory auditing and are registered for VAT). <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2, 3" target="_blank">View Original (p.2, 3)</a>
    </p>
    <p>
    A <strong>rent tax of seven (7%) percent</strong> shall be levied on the rental income from renting to small firms that are only registered with a Permanent Account Number (PAN) but are not required to undergo auditing. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <p>
    A <strong>house and land rent tax of four (4%) percent</strong> shall be levied on the rental income from renting out a private house for residential purposes or land for general agricultural purposes. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <p>
    For the purpose of <strong>house and land rent tax</strong>, the minimum rent rate for house and land shall be as per <strong>Annex (4)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">5. <strong>Business Tax:</strong></h2>
    <p>
    <strong>Business tax</strong> shall be levied on industries, trades, businesses, and services operating within the municipality area, based on the nature of the business, capital investment, and financial transactions, as per <strong>Annex (5)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">6. <strong>Vehicle Tax:</strong></h2>
    <p>
    <strong>Vehicle tax</strong> shall be levied on small vehicles registered within the municipality area as per <strong>Annex (6)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">7. <strong>Advertisement Tax:</strong></h2>
    <p>
    <strong>Advertisement tax</strong> shall be levied on hoarding boards, glow signboards, wall writings, and banners installed within the municipality area at the rates specified in <strong>Annex (7)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">8. <strong>Rent and Squatting Fee:</strong></h2>
    <p>
    A <strong>rent and squatting fee</strong> shall be levied on land that is being used by unmanaged, landless, and squatter residents. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <p>
    For the purpose of sub-section 1, the minimum valuation rate of the land shall be as per <strong>Annex 1 (c)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <p>
    A <strong>rent and squatting fee (house tax)</strong> shall be levied on houses built on land being used by unmanaged, landless, and squatter residents at the following rates. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">View Original (p.3)</a>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>S.N.</strong></td>
    <td><strong>Type of House</strong></td>
    <td><strong>Ground Floor Tax Rate (Rs.)</strong></td>
    <td><strong>Additional Tax per Subsequent Floor (Rs.)</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>1</td>
    <td>Thatched House</td>
    <td>Not Applicable</td>
    <td></td>
    </tr>
    <tr>
    <td>2</td>
    <td>House with tile, clay tile, or tin roof</td>
    <td>100/-</td>
    <td></td>
    </tr>
    <tr>
    <td>3</td>
    <td>Truss without pillars</td>
    <td>120/-</td>
    <td></td>
    </tr>
    <tr>
    <td>4</td>
    <td>House with pillar (RCC and steel)</td>
    <td>150/-</td>
    <td>50/-</td>
    </tr>
    </tbody>
    </table>
    <p>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>S.N.</strong></td>
    <td><strong>Type of House</strong></td>
    <td><strong>Ground Floor Tax Rate (Rs.)</strong></td>
    <td><strong>Additional Tax per Subsequent Floor (Rs.)</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td></td>
    <td>Truss</td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>5</td>
    <td>RCC residential house built before 070 B.S.</td>
    <td>200/-</td>
    <td>100/-</td>
    </tr>
    <tr>
    <td>6</td>
    <td>RCC residential house built after 070 B.S.</td>
    <td>225/-</td>
    <td>100/-</td>
    </tr>
    <tr>
    <td>7</td>
    <td>RCC commercial house built before 070 B.S.</td>
    <td>250/-</td>
    <td>100/-</td>
    </tr>
    <tr>
    <td>8</td>
    <td>RCC commercial house built after 070 B.S.</td>
    <td>275/-</td>
    <td>100/-</td>
    </tr>
    </tbody>
    </table>
    <p>
    Additional provisions for the purpose of <strong>rent and squatting fees</strong> shall be as specified. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">View Original (p.4)</a>
    </p>
    <p>
    The municipality shall levy a <strong>rent and squatting fee</strong> at the rates in <strong>Annex (8)</strong> for the use of stalls at weekly markets or shops operating in structures constructed, maintained, or operated by the municipality within its jurisdiction. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">View Original (p.4)</a>
    </p>
    <p>
    Similarly, since the installation of cables and wires by various cable networks and internet service providers on the poles of Nepal Electricity Authority and Nepal Telecom within the <strong>Tilottama Municipality</strong> area reduces the beauty of the city, and the revenue from this is only received by the Nepal Electricity Authority and Nepal Telecom, a <strong>rent and squatting tax of Rs. 300/- per pole</strong> will be levied from the <strong>fiscal year 2081/082</strong> on the poles where wires are installed. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">View Original (p.4)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">9. <strong>Service Fee, Natural Resource Management Fee, and Charges:</strong></h2>
    <p>
    The fees and charges for recommendations or services provided by the municipality, charges related to map approval, fees for river-based material extraction, management, and regulation, road maintenance, and environmental charges, etc., shall be at the rates mentioned in <strong>Annex (9)</strong>, and waste management fees shall be at the rates mentioned in <strong>Annex (11)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">View Original (p.4)</a>
    </p>
    <p>
    If a person requests the same recommendation again after 35 days of its issuance without a circumstance beyond their control, the recommendation fee shall be charged again. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">10. <strong>Scrap Export Fee:</strong></h2>
    <p>
    A <strong>scrap export fee</strong> shall be levied on reusable and recyclable goods produced or collected within the <strong>Tilottama Municipality</strong> area at the rates specified in <strong>Annex (10)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">11. <strong>Rent Fee:</strong></h2>
    <p>
    If structures built by the <strong>Tilottama Municipality</strong> need to be operated through the private sector or if ponds within the municipal area need to be rented out, a <strong>rent fee</strong> shall be levied through the process specified in Chapter 12 of the <strong>Public Procurement Regulations 2077</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">12. <strong>Entertainment Tax:</strong></h2>
    <p>
    <strong>Entertainment tax</strong> shall be levied on areas such as cinema halls, parks, gardens, casinos, fairs, trade fairs, circuses, etc., within the <strong>Tilottama Municipality</strong> area at the rates and through the process specified in the <strong>Lumbini Province Government's Financial Act 2082</strong> and <strong>Entertainment Tax Regulations 2076</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">13. <strong>Other Fees:</strong></h2>
    <p>
    If it is deemed necessary to levy taxes and fees such as tourism fees, trekking, kayaking, canyoning, bungee jumping, zip-flyer, rafting fees, parking fees, and taxes on herbs and animals, a decision may be made by the Municipal Executive meeting and implemented. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <p>
    However, the decision made by the executive committee regarding such taxes and fees must be approved by the first meeting of the Municipal Assembly. If not approved, the decision shall be deemed automatically null and void. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">14. <strong>Tax Exemptions:</strong></h2>
    <p>
    Individuals or organizations liable to pay <strong>property tax</strong> under this Act may be granted <strong>tax exemptions</strong> as follows. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <p>
    a) A <strong>10% exemption</strong> shall be granted on the tax amount if the <strong>property tax</strong>, <strong>land tax</strong>, and <strong>unmanaged settlement management fee</strong> for the <strong>fiscal year 2082/083</strong> are paid by the end of <strong>Ashwin 2082</strong>, and a <strong>5% exemption</strong> if paid by the end of <strong>Poush 2082</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <p>
    b) A <strong>15% tax exemption</strong> shall be granted on the <strong>property tax</strong> for property registered in the name of a <strong>single woman</strong> and for property registered in the name of a <strong>productive industry</strong> that provides employment to at least fifty Nepali citizens. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <p>
    Individuals or organizations liable to pay <strong>business tax</strong> under this Act may be granted <strong>tax exemptions</strong> as follows. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">View Original (p.5)</a>
    </p>
    <p>
    a) Exemption is available only at the time of renewal. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>10% exemption</strong> shall be granted on the <strong>business tax</strong> for the <strong>fiscal year 2082/083</strong> if paid by the end of <strong>Ashwin 2082</strong>, and a <strong>5% exemption</strong> if paid by the end of <strong>Poush 2081</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    b) Exemption is available at the time of registration or renewal (business tax). <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>50% exemption</strong> shall be granted on the <strong>business tax</strong> for agricultural production and animal husbandry businesses. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>100% exemption</strong> shall be granted on the <strong>business tax</strong> for productive agricultural businesses run by young entrepreneurs under the slogan "I'd rather do agriculture, but I won't forget my place." <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>75% exemption</strong> shall be granted on the <strong>business tax</strong> for micro-enterprises run exclusively by women. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>25% exemption</strong> shall be granted on the fees for registration, renewal, or transfer of ownership of carts, rickshaws, e-rickshaws, and tempos if they are operated by persons with disabilities or women themselves. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    However, this exemption shall not be granted if such vehicles are registered in the name of such individuals but operated by others. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>75% exemption</strong> shall be granted on the <strong>business tax</strong> for cooperatives with only female members. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>50% exemption</strong> shall be granted on the <strong>business tax</strong> for industries that install plants to reduce environmental pollution and for industries that package their products in cloth or paper instead of plastic. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>25% exemption</strong> shall be granted on the <strong>business tax</strong> for hotel businesses that provide employment to at least five hundred tourists (domestic and foreign) exclusively to Nepalis. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    A <strong>100% exemption</strong> shall be granted on the <strong>business tax</strong> for industries and businesses operated by '<strong>B</strong>' and '<strong>C</strong>' category disabled persons. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    c) Exemption at the time of registration or renewal (Investment Conference). <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">View Original (p.6)</a>
    </p>
    <p>
    If an investment agreement is made during the <strong>Tilottama Investment Conference</strong> from within the list of 22 projects proposed by the municipality, or if a proposal for an investment agreement is submitted within <strong>6 months (180 days)</strong> of the conference's completion, and the project commences within <strong>1 year</strong> of the investment agreement, such projects may be provided with the exemptions and benefits specified in <strong>Annex 12</strong> by the municipality. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6, 7" target="_blank">View Original (p.6, 7)</a>
    </p>
    <p>
    Similarly, if, during the <strong>Tilottama Investment Conference</strong> or within <strong>6 months (180 days)</strong> of its completion, proposals for other investment projects are submitted by entrepreneurs who were influenced and attracted by the conference, other than the list submitted as per sub-section 2 (C), and an investment agreement is made and the project commences within <strong>1 year</strong>, such projects may be provided with the exemptions and benefits specified in <strong>Annex 13</strong> by the municipality. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    <strong>Property</strong> and <strong>land tax</strong> under this Act shall not be levied in the following circumstances: <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (a) Houses and land owned by the <strong>Government of Nepal</strong>, Provincial Government, or Local Government. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (b) Buildings and land of <strong>government hospitals</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (c) Land owned by a <strong>Guthi (trust)</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (d) Buildings and land of <strong>government educational institutions</strong> and other government bodies. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (e) Buildings and land of <strong>religious institutions</strong> (temples, monasteries, churches, mosques, etc.). <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (f) <strong>Public utility sites</strong> such as water collection ponds, airfields, power generation houses, cremation grounds, bus parks, stadiums, and parks. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    (g) Buildings and land of <strong>embassies</strong>, commercial missions, and diplomatic missions. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    The recommendation fee under this Act shall be waived when making recommendations for <strong>financial hardship</strong>, <strong>disaster victims</strong>, <strong>COVID health insurance</strong>, <strong>animal insurance</strong>, and treatment for <strong>severe diseases</strong> specified by the Government of Nepal or the Provincial Government. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    A <strong>10% exemption</strong> shall be granted on the tax amount for individuals or organizations liable to pay <strong>house rent tax</strong> under this Act if they pay the lump-sum annual tax in advance by the end of <strong>Ashwin 2082</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    A <strong>100% exemption</strong> may be granted on the map approval fee for the construction of buildings for agricultural purposes and for community school buildings that are registered in the municipality. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">View Original (p.7)</a>
    </p>
    <p>
    A <strong>fifty (50) percent exemption</strong> may be granted on the map approval fee for the construction of sheds required for vegetable and fruit and livestock markets to be established in <strong>Tilottama Municipality</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    A <strong>100% exemption</strong> may be granted on the map approval fee for the construction of storage houses by cooperatives that purchase and store agricultural products at the support price specified by the government. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    When collecting any revenue under this Act through a bid, a discount of up to <strong>10%</strong> may be granted if the bidder pays the promised amount in advance as a lump sum. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    However, the promised amount after such an exemption shall not be less than the minimum bid amount for that contract. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    Similarly, such an exemption shall not be granted when revenue is collected through bids from revenue titles under the authority of the local and provincial levels (where revenue is deposited in the divisible fund). <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    Note: To avail the concessions under sub-rule 6, 7, and 8 of Rule 11, evidence to confirm this must be mandatorily submitted. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">15. <strong>Penalty for Arrears:</strong></h2>
    <p>
    It shall be the duty of the taxpayer to pay the tax for each current <strong>fiscal year</strong> within the current fiscal year itself. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    If the tax for the <strong>fiscal year 2082/083</strong>, which is required to be paid under this Act, is not paid by the end of <strong>Ashar 2083</strong> and remains in arrears, a <strong>50% penalty</strong> shall be levied thereafter. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    Taxpayers who were liable to pay tax to this municipality under the then-existing Financial Act for fiscal years prior to 2082/083 shall have to pay the tax along with a <strong>50% penalty</strong> even if they come to pay the tax in the current <strong>fiscal year 2082/083</strong>. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">16. <strong>Incentives to be provided:</strong></h2>
    <p>
    <strong>25%</strong> of the portion of the revenue collected from natural resource management as per Section (8) that is deposited in the municipality's consolidated fund shall be allocated as an <strong>incentive</strong> to the ward where the revenue was collected, to be added to the ward's budget ceiling for infrastructure development programs. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">View Original (p.8)</a>
    </p>
    <p>
    Similarly, to increase the revenue collection and mobilization capacity of the ward office, <strong>20%</strong> of the internal revenue collected by the ward office shall be allocated as an <strong>incentive</strong> to the concerned ward, to be added to its budget ceiling for infrastructure development programs. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8, 9" target="_blank">View Original (p.8, 9)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">17. <strong>Tax and Fee Collection Procedure:</strong></h2>
    <p>
    The procedure for the collection of taxes and fees, including further interpretation and classification of the provisions in this Act and its annexes, shall be as specified by the Municipal Executive. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=9" target="_blank">View Original (p.9)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">18. <strong>Tax Rates Not to be Amended:</strong></h2>
    <p>
    After this Act comes into effect, the tax rates mentioned in the annexes of this Act shall generally not be amended during the fiscal year 2082/083. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=9" target="_blank">View Original (p.9)</a>
    </p>
    <p>
    However, the Municipal Assembly shall not be hindered from including tax areas that were missed in the annexes of this Act. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=9" target="_blank">View Original (p.9)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2"><strong>Annexes</strong></h2>
    <h3 class="text-xl font-bold text-gray-300 mt-4 mb-2"><strong>Annex 1</strong></h3>
    <p>
    a) For the purpose of <strong>property tax</strong> as per sub-section 4 of Section 2, the minimum valuation rate of land shall be as follows. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=10" target="_blank">View Original (p.10)</a>
    </p>
    <p>
    b) For the purpose of <strong>land tax</strong> as per sub-section 2 of Section 3, the valuation rate of land shall be the amount arrived at by a <strong>15% reduction</strong> from the following rate. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=10" target="_blank">View Original (p.10)</a>
    </p>
    <p>
    c) For the purpose of <strong>rent and squatting tax</strong> on unmanaged land as per sub-section 2 of Section 8, the valuation rate of land shall be the amount arrived at by a <strong>20% reduction</strong> from the following rate. <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=10" target="_blank">View Original (p.10)</a>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>Current Ward No.</strong></td>
    <td><strong>Former Village Development Committee</strong></td>
    <td><strong>Land Classification Minimum Valuation Rate</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>1-4</td>
    <td>Shankarnagar</td>
    <td rowspan="4">Shall be as determined by the Land Revenue Office, Butwal, for the purpose of house and land registration for the fiscal year 2082/083.</td>
    </tr>
    <tr>
    <td>5-6</td>
    <td>Anandavan</td>
    </tr>
    <tr>
    <td>7-9</td>
    <td>Karahiya</td>
    </tr>
    <tr>
    <td>10-12</td>
    <td>Makrahara</td>
    </tr>
    <tr>
    <td>13-14</td>
    <td>Tikuligadh</td>
    <td rowspan="3">Shall be as determined by the Land Revenue Office, Bhairahawa, for the fiscal year 2082/083.</td>
    </tr>
    <tr>
    <td>15-16</td>
    <td>Madhawalia</td>
    </tr>
    <tr>
    <td>17</td>
    <td>Gangolia</td>
    </tr>
    </tbody>
    </table>
    `,
  },
  ne: {
    title: "तिलोत्तमा नगरपालिका",
    subtitle: "आर्थिक ऐन दस्तावेज पाठक",
    searchPlaceholder: "दस्तावेज खोज्नुहोस्...",
    viewOriginal: "मूल हेर्नुहोस्",
    noResults: "तपाईंको खोजी र फिल्टर मापदण्डसँग कुनै परिणाम फेला परेन।",
    languageLabel: "भाषा",
    languageName: "नेपाली",
    switchLangButton: "English",
    filterOptions: [
      { value: "", label: "सबै सामग्री" },
      { value: "h2", label: "मुख्य खण्डहरू" },
      { value: "h3", label: "उप-खण्डहरू" },
    ],
    actContent: `
    <h1 class="text-3xl md:text-4xl font-extrabold text-white mb-4"><strong>तिलोत्तमा नगरपालिका</strong></h1>
    <p>
    <strong>तिलोत्तमा नगर कार्यपालिका</strong> द्वारा निर्मित देहायको ऐन सार्वजनिक जानकारीका लागि प्रकाशित गरिएको छ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2"><strong>ऐन नं. १ वर्ष २०८२</strong></h2>
    <h3 class="text-xl font-bold text-gray-300 mt-4 mb-2">ऐनको नाम: <strong>तिलोत्तमा नगरपालिका आर्थिक ऐन-२०८२</strong></h3>
    <p>
    नेपालको संविधानको धारा २२८ को उपधारा (२) बमोजिम स्थानीय कर र शुल्क संकलन, छूट र व्यवस्थापन गरी <strong>तिलोत्तमा नगरपालिका</strong>को <strong>आर्थिक वर्ष २०८२/०८३</strong> को <strong>आर्थिक प्रस्तावहरू</strong> कार्यान्वयन गर्न वाञ्छनीय भएकोले, तिलोत्तमा नगरपालिकाको दोस्रो नगर सभाले आफ्नो सातौं बैठकमा यो ऐन पारित गरेको छ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१. <strong>संक्षिप्त नाम र प्रारम्भ:</strong></h2>
    <p>
    यो ऐनको संक्षिप्त नाम "<strong>तिलोत्तमा नगरपालिका आर्थिक ऐन, २०८२</strong>" हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <p>
    यो ऐन नगरसभाबाट स्वीकृत भई स्थानीय राजपत्रमा प्रकाशित भएपछि तिलोत्तमा नगरपालिका क्षेत्रभित्र <strong>श्रावण १, २०८२</strong> देखि लागू हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">२. <strong>सम्पत्ति कर:</strong></h2>
    <p>
    <strong>तिलोत्तमा नगरपालिका</strong>ले आफ्नो क्षेत्राधिकार भित्र देहाय बमोजिम <strong>सम्पत्ति कर</strong> लगाउनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <p>
    नगरपालिकाको क्षेत्रभित्र निर्मित घरहरू र घरले ओगटेको क्षेत्रफलको दोब्बरसम्मको जग्गामा <strong>सम्पत्ति कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <p>
    यस खण्डको प्रयोजनका लागि 'घर' भन्नाले घर, गोदाम, हल, टहरा वा सोही प्रकारको संरचनालाई जनाउनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=1" target="_blank">मूल हेर्नुहोस् (पृ.१)</a>
    </p>
    <p>
    <strong>सम्पत्ति कर</strong>को प्रयोजनका लागि जग्गाको न्यूनतम मूल्याङ्कन दर <strong>अनुसूची १ (क)</strong> बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    <strong>सम्पत्ति कर</strong>को प्रयोजनका लागि संरचनाहरूबाट घट्दो मौज्दात विधि प्रयोग गरी ह्रासकट्टी गरिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    ह्रासकट्टीको प्रयोजनका लागि संरचनाको आयु, त्यसको आयुको अन्त्यमा रहेको अवशेष मूल्य, र ह्रासकट्टी दर <strong>अनुसूची २</strong> बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    <strong>सम्पत्ति कर</strong> <strong>अनुसूची १</strong> र <strong>अनुसूची २</strong> अनुसार कुल मूल्याङ्कन गरिएको रकममा <strong>अनुसूची (३)</strong> मा तोकिएको दरमा लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    <strong>सम्पत्ति कर</strong> सम्बन्धी थप व्यवस्थाहरू तोकिए बमोजिम हुनेछन्। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">३. <strong>जग्गा कर (मालपोत):</strong></h2>
    <p>
    <strong>तिलोत्तमा नगरपालिका</strong>ले आफ्नो क्षेत्राधिकार भित्र धारा १ अन्तर्गत <strong>सम्पत्ति कर</strong>का लागि तोकिएको बाहेकको जग्गामा <strong>जग्गा कर</strong> लगाउनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    <strong>जग्गा कर</strong>को प्रयोजनका लागि जग्गाको न्यूनतम मूल्याङ्कन दर यो ऐनको <strong>अनुसूची १ (ख)</strong> बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    <strong>जग्गा कर</strong> <strong>अनुसूची १ (ख)</strong> अनुसार कुल मूल्याङ्कन गरिएको रकममा <strong>अनुसूची (३)</strong> मा तोकिएको दरमा लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    <strong>जग्गा कर</strong> सम्बन्धी थप व्यवस्थाहरू तोकिए बमोजिम हुनेछन्। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    यस नगरपालिकामा आर्थिक वर्ष २०७५/०७६ देखि <strong>सम्पत्ति कर</strong> र <strong>जग्गा कर</strong> लागू भएकोले, यदि कसैको आर्थिक वर्ष २०७४/०७५ सम्मको <strong>जग्गा कर (मालपोत)</strong> बक्यौता भएमा, त्यस्तो जग्गामा देहायको दरमा <strong>जग्गा कर (मालपोत)</strong> र <strong>जरिवाना</strong> लगाइनेछ: <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>जग्गाको विवरण</strong></td>
    <td><strong>प्रति कट्ठा जग्गा कर (रु.)</strong></td>
    <td><strong>प्रत्येक वर्षको जरिवाना (%)</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>१० धुरसम्म</td>
    <td>२०.००</td>
    <td>२० प्रतिशत</td>
    </tr>
    <tr>
    <td>१० धुरभन्दा बढी</td>
    <td>३०.००</td>
    <td>२० प्रतिशत</td>
    </tr>
    </tbody>
    </table>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">४. <strong>घर र जग्गा बहाल कर:</strong></h2>
    <p>
    नगरपालिका क्षेत्रभित्र रहेको कुनै भवन, घर, पसल, ग्यारेज, गोदाम, टहरा, छाप्रो, जग्गा वा पोखरी पूर्ण वा आंशिक रूपमा बहालमा दिएर प्राप्त हुने आम्दानीमा <strong>बहाल कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2" target="_blank">मूल हेर्नुहोस् (पृ.२)</a>
    </p>
    <p>
    व्यावसायिक कर्पोरेट घरहरू (व्यावसायिक प्रतिष्ठान, फर्म, सहकारी, र अनिवार्य लेखापरीक्षण गर्नुपर्ने र भ्याटमा दर्ता भएका सरकारी कार्यालयहरू) लाई बहालमा दिँदा प्राप्त हुने बहाल आम्दानीमा <strong>दस (१०%) प्रतिशत बहाल कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=2, 3" target="_blank">मूल हेर्नुहोस् (पृ.२, ३)</a>
    </p>
    <p>
    केवल स्थायी खाता नम्बर (PAN) मा दर्ता भएका तर लेखापरीक्षण गर्नुपर्ने नभएका साना फर्महरूलाई बहालमा दिँदा प्राप्त हुने बहाल आम्दानीमा <strong>सात (७%) प्रतिशत बहाल कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <p>
    निजी घर आवासीय प्रयोजनका लागि वा जग्गा सामान्य कृषि प्रयोजनका लागि बहालमा दिँदा प्राप्त हुने बहाल आम्दानीमा <strong>चार (४%) प्रतिशत घर र जग्गा बहाल कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <p>
    <strong>घर र जग्गा बहाल कर</strong>को प्रयोजनका लागि घर र जग्गाको न्यूनतम बहाल दर <strong>अनुसूची (४)</strong> बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">५. <strong>व्यवसाय कर:</strong></h2>
    <p>
    नगरपालिका क्षेत्रभित्र सञ्चालित उद्योग, व्यापार, व्यवसाय, र सेवाहरूमा व्यवसायको प्रकृति, पुँजी लगानी, र वित्तीय कारोबारका आधारमा <strong>अनुसूची (५)</strong> बमोजिम <strong>व्यवसाय कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">६. <strong>सवारी कर:</strong></h2>
    <p>
    नगरपालिका क्षेत्रभित्र दर्ता भएका साना सवारी साधनहरूमा <strong>अनुसूची (६)</strong> बमोजिम <strong>सवारी कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">७. <strong>विज्ञापन कर:</strong></h2>
    <p>
    नगरपालिका क्षेत्रभित्र राखिएका होर्डिङ बोर्ड, ग्लो साइनबोर्ड, भित्ता लेखन, र ब्यानरहरूमा <strong>अनुसूची (७)</strong> मा तोकिएको दरमा <strong>विज्ञापन कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">८. <strong>बहाल र शुल्क:</strong></h2>
    <p>
    अव्यवस्थित, भूमिहीन, र सुकुम्बासी बासिन्दाहरूले प्रयोग गरिरहेको जग्गामा <strong>बहाल र शुल्क</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <p>
    उप-खण्ड १ को प्रयोजनका लागि जग्गाको न्यूनतम मूल्याङ्कन दर <strong>अनुसूची १ (ग)</strong> बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <p>
    अव्यवस्थित, भूमिहीन, र सुकुम्बासी बासिन्दाहरूले प्रयोग गरिरहेको जग्गामा निर्मित घरहरूमा देहायका दरमा <strong>बहाल र शुल्क (घर कर)</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=3" target="_blank">मूल हेर्नुहोस् (पृ.३)</a>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>क्र.स.</strong></td>
    <td><strong>घरको प्रकार</strong></td>
    <td><strong>भुइँ तलाको कर दर (रु.)</strong></td>
    <td><strong>थप तलाको लागि थप कर (रु.)</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>१</td>
    <td>फुसको घर</td>
    <td>लागू हुँदैन</td>
    <td></td>
    </tr>
    <tr>
    <td>२</td>
    <td>टाइल, माटोको टाइल वा टिनको छाना भएको घर</td>
    <td>१००/-</td>
    <td></td>
    </tr>
    <tr>
    <td>३</td>
    <td>पिलरविहीन ट्रस</td>
    <td>१२०/-</td>
    <td></td>
    </tr>
    <tr>
    <td>४</td>
    <td>पिलर सहितको घर (RCC र स्टिल)</td>
    <td>१५०/-</td>
    <td>५०/-</td>
    </tr>
    </tbody>
    </table>
    <p>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>क्र.स.</strong></td>
    <td><strong>घरको प्रकार</strong></td>
    <td><strong>भुइँ तलाको कर दर (रु.)</strong></td>
    <td><strong>थप तलाको लागि थप कर (रु.)</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td></td>
    <td>ट्रस</td>
    <td></td>
    <td></td>
    </tr>
    <tr>
    <td>५</td>
    <td>०७० B.S. भन्दा पहिले बनेको RCC आवासीय घर</td>
    <td>२००/-</td>
    <td>१००/-</td>
    </tr>
    <tr>
    <td>६</td>
    <td>०७० B.S. पछि बनेको RCC आवासीय घर</td>
    <td>२२५/-</td>
    <td>१००/-</td>
    </tr>
    <tr>
    <td>७</td>
    <td>०७० B.S. भन्दा पहिले बनेको RCC व्यापारिक घर</td>
    <td>२५०/-</td>
    <td>१००/-</td>
    </tr>
    <tr>
    <td>८</td>
    <td>०७० B.S. पछि बनेको RCC व्यापारिक घर</td>
    <td>२७५/-</td>
    <td>१००/-</td>
    </tr>
    </tbody>
    </table>
    <p>
    <strong>बहाल र शुल्क</strong>को प्रयोजनका लागि थप व्यवस्थाहरू तोकिए बमोजिम हुनेछन्। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">मूल हेर्नुहोस् (पृ.४)</a>
    </p>
    <p>
    नगरपालिकाले आफ्नो क्षेत्राधिकारभित्र साप्ताहिक बजारमा रहेका स्टल वा नगरपालिकाले निर्माण, मर्मत वा सञ्चालन गरेको संरचनामा सञ्चालित पसलहरू प्रयोग गरे बापत <strong>अनुसूची (८)</strong> मा उल्लेखित दरमा <strong>बहाल र शुल्क</strong> लगाउनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">मूल हेर्नुहोस् (पृ.४)</a>
    </p>
    <p>
    त्यसैगरी, विभिन्न केबल नेटवर्क र इन्टरनेट सेवा प्रदायकहरूले <strong>तिलोत्तमा नगरपालिका</strong> क्षेत्रभित्र नेपाल विद्युत प्राधिकरण र नेपाल टेलिकमको पोलमा केबल र तार जडान गर्दा सहरको सुन्दरतामा कमी आउने र यसबाट प्राप्त हुने राजस्व नेपाल विद्युत प्राधिकरण र नेपाल टेलिकमले मात्र प्राप्त गर्ने भएकोले <strong>आर्थिक वर्ष २०८१/०८२</strong> देखि तार जडान भएका पोलमा <strong>प्रत्येक पोल बापत रु. ३००/- बहाल र शुल्क</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">मूल हेर्नुहोस् (पृ.४)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">९. <strong>सेवा शुल्क, प्राकृतिक स्रोत व्यवस्थापन शुल्क, र अन्य शुल्कहरू:</strong></h2>
    <p>
    नगरपालिकाले प्रदान गर्ने सिफारिस वा सेवाहरूका लागि लाग्ने शुल्क, नक्सा पास सम्बन्धी शुल्क, नदीजन्य पदार्थ निकासी, व्यवस्थापन, र नियमनसम्बन्धी शुल्क, सडक मर्मत, र वातावरणीय शुल्क आदि <strong>अनुसूची (९)</strong> मा उल्लेखित दरमा हुनेछ, र फोहोरमैला व्यवस्थापन शुल्क <strong>अनुसूची (११)</strong> मा उल्लेखित दरमा हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=4" target="_blank">मूल हेर्नुहोस् (पृ.४)</a>
    </p>
    <p>
    यदि कुनै व्यक्तिले आफ्नो नियन्त्रणभन्दा बाहिरको परिस्थितिविना नै सिफारिस जारी भएको ३५ दिनपछि पुनः सोही सिफारिस अनुरोध गरेमा, सिफारिस शुल्क पुनः लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१०. <strong>कवाडी निकासी शुल्क:</strong></h2>
    <p>
    <strong>तिलोत्तमा नगरपालिका</strong> क्षेत्रभित्र उत्पादित वा संकलित पुनः प्रयोग योग्य र पुनः प्रयोग गर्न सकिने सामानहरूमा <strong>अनुसूची (१०)</strong> मा तोकिएको दरमा <strong>कवाडी निकासी शुल्क</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">११. <strong>बहाल शुल्क:</strong></h2>
    <p>
    यदि <strong>तिलोत्तमा नगरपालिका</strong>ले बनाएका संरचनाहरू निजी क्षेत्र मार्फत सञ्चालन गर्नुपरेमा वा नगरपालिका क्षेत्रभित्रका पोखरीहरू बहालमा दिनुपरेमा <strong>सार्वजनिक खरिद नियमावली २०७७</strong> को दफा १२ मा तोकिएको प्रक्रियाबाट <strong>बहाल शुल्क</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१२. <strong>मनोरञ्जन कर:</strong></h2>
    <p>
    सिनेमा हल, पार्क, बगैंचा, क्यासिनो, मेला, व्यापार मेला, सर्कस आदि जस्ता क्षेत्रहरूमा <strong>लुम्बिनी प्रदेश सरकारको आर्थिक ऐन २०८२</strong> र <strong>मनोरञ्जन कर नियमावली २०७६</strong> मा तोकिएको दर र प्रक्रियाबाट <strong>मनोरञ्जन कर</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१३. <strong>अन्य शुल्कहरू:</strong></h2>
    <p>
    यदि पर्यटन शुल्क, ट्रेकिङ, कायाकिङ, क्यान्योनिङ, बन्जी जम्पिङ, जिप-फ्लायर, राफ्टिङ शुल्क, पार्किङ शुल्क, र जडीबुटी तथा जनावरमा लाग्ने कर जस्ता कर र शुल्कहरू लगाउन आवश्यक परेमा, नगर कार्यपालिकाको बैठकबाट निर्णय गरी कार्यान्वयन गर्न सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <p>
    यद्यपि, यस्ता कर र शुल्क सम्बन्धी कार्यकारी समितिले गरेको निर्णय नगर सभाको पहिलो बैठकबाट स्वीकृत हुनुपर्नेछ। यदि स्वीकृत नभएमा, निर्णय स्वतः रद्द भएको मानिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१४. <strong>कर छूट:</strong></h2>
    <p>
    यस ऐन अन्तर्गत <strong>सम्पत्ति कर</strong> तिर्नुपर्ने व्यक्ति वा संस्थालाई देहाय बमोजिम <strong>कर छूट</strong> दिन सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <p>
    क) यदि <strong>आर्थिक वर्ष २०८२/०८३</strong> को <strong>सम्पत्ति कर</strong>, <strong>जग्गा कर</strong>, र <strong>अव्यवस्थित बस्ती व्यवस्थापन शुल्क</strong> <strong>आश्विन २०८२</strong> को अन्त्यसम्ममा भुक्तानी गरेमा कर रकममा <strong>१०% छूट</strong> दिइनेछ, र <strong>पौष २०८२</strong> को अन्त्यसम्ममा भुक्तानी गरेमा <strong>५% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <p>
    ख) <strong>एकल महिला</strong>को नाममा दर्ता भएको सम्पत्ति र कम्तीमा पचास नेपाली नागरिकलाई रोजगारी प्रदान गर्ने <strong>उत्पादनमूलक उद्योग</strong>को नाममा दर्ता भएको सम्पत्तिमा <strong>१५% कर छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <p>
    यस ऐन अन्तर्गत <strong>व्यवसाय कर</strong> तिर्नुपर्ने व्यक्ति वा संस्थालाई देहाय बमोजिम <strong>कर छूट</strong> दिन सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=5" target="_blank">मूल हेर्नुहोस् (पृ.५)</a>
    </p>
    <p>
    क) छूट नवीकरणको समयमा मात्र उपलब्ध छ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    <strong>आर्थिक वर्ष २०८२/०८३</strong> को <strong>व्यवसाय कर</strong> <strong>आश्विन २०८२</strong> को अन्त्यसम्ममा भुक्तानी गरेमा <strong>१०% छूट</strong> दिइनेछ, र <strong>पौष २०८१</strong> को अन्त्यसम्ममा भुक्तानी गरेमा <strong>५% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    ख) छूट दर्ता वा नवीकरणको समयमा उपलब्ध छ (व्यवसाय कर)। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    कृषि उत्पादन र पशुपालन व्यवसायका लागि <strong>५०% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    युवा उद्यमीहरूले "कृषि गर्छु, तर ठाउँ बिर्सिन्न" भन्ने नारा अन्तर्गत सञ्चालित उत्पादनमूलक कृषि व्यवसायका लागि <strong>१००% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    महिलाहरूले मात्र सञ्चालन गरेका लघु उद्यमहरूका लागि <strong>७५% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    यदि ठेला, रिक्सा, ई-रिक्सा, र टेम्पो अपाङ्गता भएका व्यक्ति वा महिलाहरूले आफैं सञ्चालन गरेमा, तिनीहरूको दर्ता, नवीकरण, वा स्वामित्व हस्तान्तरण शुल्कमा <strong>२५% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    तर, त्यस्ता सवारी साधनहरू ती व्यक्तिहरूको नाममा दर्ता भए पनि अरू कसैले सञ्चालन गरेमा यो छूट दिइने छैन। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    केवल महिला सदस्यहरू भएका सहकारीहरूका लागि <strong>७५% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    वातावरणीय प्रदूषण घटाउनका लागि प्लान्ट जडान गर्ने उद्योगहरू र आफ्ना उत्पादनहरू प्लास्टिकको सट्टा कपडा वा कागजमा प्याकेजिङ गर्ने उद्योगहरूका लागि <strong>५०% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    कम्तीमा पाँच सय पर्यटकहरूलाई (घरेलु र विदेशी) विशेष गरी नेपालीहरूलाई मात्र रोजगारी प्रदान गर्ने होटल व्यवसायहरूका लागि <strong>२५% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    '<strong>ख</strong>' र '<strong>ग</strong>' श्रेणीका अपाङ्गता भएका व्यक्तिहरूले सञ्चालन गरेका उद्योग र व्यवसायहरूका लागि <strong>१००% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    ग) दर्ता वा नवीकरणको समयमा छूट (लगानी सम्मेलन)। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6" target="_blank">मूल हेर्नुहोस् (पृ.६)</a>
    </p>
    <p>
    यदि नगरपालिकाले प्रस्ताव गरेका २२ परियोजनाहरूको सूची भित्रबाट <strong>तिलोत्तमा लगानी सम्मेलन</strong>को समयमा लगानी सम्झौता भएमा, वा सम्मेलन समाप्त भएको <strong>६ महिना (१८० दिन)</strong> भित्र लगानी सम्झौताको लागि प्रस्ताव पेश गरिएमा, र लगानी सम्झौता भएको <strong>१ वर्ष</strong> भित्र परियोजना सुरु भएमा, त्यस्ता परियोजनाहरूलाई नगरपालिका द्वारा <strong>अनुसूची १२</strong> मा तोकिएको छूट र लाभहरू प्रदान गर्न सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=6, 7" target="_blank">मूल हेर्नुहोस् (पृ.६, ७)</a>
    </p>
    <p>
    त्यसैगरी, यदि <strong>तिलोत्तमा लगानी सम्मेलन</strong>को समयमा वा त्यसको समाप्त भएको <strong>६ महिना (१८० दिन)</strong> भित्र, उप-खण्ड २ (ग) अनुसार पेश गरिएको सूची बाहेक, सम्मेलनबाट प्रभावित र आकर्षित भएका उद्यमीहरूले अन्य लगानी परियोजनाहरूको लागि प्रस्ताव पेश गरेमा, र लगानी सम्झौता भएर परियोजना <strong>१ वर्ष</strong> भित्र सुरु भएमा, त्यस्ता परियोजनाहरूलाई नगरपालिका द्वारा <strong>अनुसूची १३</strong> मा तोकिएको छूट र लाभहरू प्रदान गर्न सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    यस ऐन अन्तर्गत <strong>सम्पत्ति</strong> र <strong>जग्गा कर</strong> देहायका परिस्थितिहरूमा लगाइने छैन: <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (क) <strong>नेपाल सरकार</strong>, प्रदेश सरकार, वा स्थानीय सरकारको स्वामित्वमा रहेको घर र जग्गा। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (ख) <strong>सरकारी अस्पतालहरू</strong>का भवन र जग्गा। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (ग) <strong>गुठी (ट्रस्ट)</strong>को स्वामित्वमा रहेको जग्गा। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (घ) <strong>सरकारी शैक्षिक संस्थाहरू</strong> र अन्य सरकारी निकायहरूका भवन र जग्गा। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (ङ) <strong>धार्मिक संस्थाहरू</strong> (मन्दिर, गुम्बा, चर्च, मस्जिद, आदि) का भवन र जग्गा। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (च) पानी संकलन पोखरी, हवाई मैदान, बिजुली उत्पादन गृह, दाहसंस्कार स्थल, बसपार्क, स्टेडियम, र पार्क जस्ता <strong>सार्वजनिक उपयोगिताका स्थलहरू</strong>। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    (छ) <strong>दूतावास</strong>, वाणिज्य दूतावास, र कूटनीतिक नियोगका भवन र जग्गा। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    नेपाल सरकार वा प्रदेश सरकारले तोकेका <strong>आर्थिक कठिनाई</strong>, <strong>विपद् पीडित</strong>, <strong>कोभिड स्वास्थ्य बीमा</strong>, <strong>पशु बीमा</strong>, र <strong>गम्भीर रोगहरूको उपचार</strong>का लागि सिफारिस गर्दा यस ऐन अन्तर्गतको सिफारिस शुल्क छूट दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    यस ऐन अन्तर्गत <strong>घर बहाल कर</strong> तिर्नुपर्ने व्यक्ति वा संस्थाले <strong>आश्विन २०८२</strong> को अन्त्यसम्ममा एकमुष्ट वार्षिक कर अग्रिम भुक्तानी गरेमा कर रकममा <strong>१०% छूट</strong> दिइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    कृषि प्रयोजनका लागि भवन निर्माण र नगरपालिकामा दर्ता भएका सामुदायिक विद्यालयका भवनहरूका लागि नक्सा पास शुल्कमा <strong>१००% छूट</strong> दिन सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=7" target="_blank">मूल हेर्नुहोस् (पृ.७)</a>
    </p>
    <p>
    <strong>तिलोत्तमा नगरपालिका</strong>मा स्थापना हुने तरकारी र फलफूल तथा पशु बजारका लागि आवश्यक टहरा निर्माणको नक्सा पास शुल्कमा <strong>पचास (५०) प्रतिशत छूट</strong> दिन सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    सरकारले तोकेको समर्थन मूल्यमा कृषि उत्पादन खरिद र भण्डारण गर्ने सहकारीहरूले भण्डारण घर निर्माण गर्दा नक्सा पास शुल्कमा <strong>१००% छूट</strong> दिन सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    यस ऐन अन्तर्गत कुनै पनि राजस्व बोलपत्र मार्फत संकलन गर्दा, यदि बोलपत्रदाताले एकमुष्ट अग्रिम रकम भुक्तानी गरेमा <strong>१०% सम्मको छूट</strong> दिन सकिनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    तर, यस्तो छूट पछि बाँकी रहेको रकम त्यस सम्झौताका लागि न्यूनतम बोलपत्र रकम भन्दा कम हुने छैन। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    त्यसैगरी, स्थानीय र प्रादेशिक तहको अधिकार अन्तर्गतको राजस्व शीर्षकहरूबाट (जहाँ राजस्व विभाज्य कोषमा जम्मा हुन्छ) बोलपत्र मार्फत राजस्व संकलन गर्दा यस्तो छूट दिइने छैन। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    नोट: नियम ११ को उप-नियम ६, ७, र ८ अन्तर्गतको छूट प्राप्त गर्नका लागि यसलाई पुष्टि गर्ने प्रमाण अनिवार्य रूपमा पेश गर्नुपर्नेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१५. <strong>बक्यौतामा लाग्ने जरिवाना:</strong></h2>
    <p>
    प्रत्येक चालू <strong>आर्थिक वर्ष</strong>को कर सोही आर्थिक वर्षभित्र तिर्नु करदाताको कर्तव्य हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    यस ऐन अन्तर्गत तिर्नुपर्ने <strong>आर्थिक वर्ष २०८२/०८३</strong> को कर <strong>आषाढ २०८३</strong> को अन्त्यसम्ममा नतिरी बक्यौता रहेमा, त्यसपछि <strong>५०% जरिवाना</strong> लगाइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    २०८२/०८३ भन्दा अघिका आर्थिक वर्षहरूको लागि तत्कालीन आर्थिक ऐन अन्तर्गत यस नगरपालिकालाई कर तिर्नुपर्ने करदाताहरूले <strong>आर्थिक वर्ष २०८२/०८३</strong> मा कर तिर्न आएमा पनि <strong>५०% जरिवाना</strong> सहित कर तिर्नुपर्नेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१६. <strong>प्रोत्साहन दिइने:</strong></h2>
    <p>
    धारा (८) बमोजिम प्राकृतिक स्रोत व्यवस्थापनबाट संकलन भएको राजस्वको जुन भाग नगरपालिकाको सञ्चित कोषमा जम्मा हुन्छ, त्यसको <strong>२५%</strong> राजस्व संकलन भएको वडालाई <strong>प्रोत्साहन</strong>का रूपमा वडाको बजेट सिलिङमा थप गरी पूर्वाधार विकास कार्यक्रमका लागि छुट्याइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8" target="_blank">मूल हेर्नुहोस् (पृ.८)</a>
    </p>
    <p>
    त्यसैगरी, वडा कार्यालयको राजस्व संकलन र परिचालन क्षमता बढाउनका लागि वडा कार्यालयले संकलन गरेको आन्तरिक राजस्वको <strong>२०%</strong> सम्बन्धित वडालाई <strong>प्रोत्साहन</strong>का रूपमा त्यसको बजेट सिलिङमा थप गरी पूर्वाधार विकास कार्यक्रमका लागि छुट्याइनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=8, 9" target="_blank">मूल हेर्नुहोस् (पृ.८, ९)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१७. <strong>कर र शुल्क संकलन प्रक्रिया:</strong></h2>
    <p>
    यस ऐन र यसका अनुसूचीहरूमा रहेका प्रावधानहरूको थप व्याख्या र वर्गीकरण सहित कर र शुल्क संकलनको प्रक्रिया नगर कार्यपालिकाले तोकिए बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=9" target="_blank">मूल हेर्नुहोस् (पृ.९)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2">१८. <strong>कर दरमा संशोधन नहुने:</strong></h2>
    <p>
    यो ऐन लागू भएपछि, यस ऐनका अनुसूचीहरूमा उल्लेखित कर दरहरू सामान्यतया आर्थिक वर्ष २०८२/०८३ मा संशोधन गरिने छैन। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=9" target="_blank">मूल हेर्नुहोस् (पृ.९)</a>
    </p>
    <p>
    तर, नगर सभालाई यस ऐनका अनुसूचीहरूमा छुटेका कर क्षेत्रहरू समावेश गर्न बाधा पुग्ने छैन। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=9" target="_blank">मूल हेर्नुहोस् (पृ.९)</a>
    </p>
    <h2 class="text-2xl font-bold text-gray-200 mt-6 mb-2"><strong>अनुसूचीहरू</strong></h2>
    <h3 class="text-xl font-bold text-gray-300 mt-4 mb-2"><strong>अनुसूची १</strong></h3>
    <p>
    क) धारा २ को उप-खण्ड ४ बमोजिम <strong>सम्पत्ति कर</strong>को प्रयोजनका लागि जग्गाको न्यूनतम मूल्याङ्कन दर देहाय बमोजिम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=10" target="_blank">मूल हेर्नुहोस् (पृ.१०)</a>
    </p>
    <p>
    ख) धारा ३ को उप-खण्ड २ बमोजिम <strong>जग्गा कर</strong>को प्रयोजनका लागि जग्गाको मूल्याङ्कन दर देहायको दरबाट <strong>१५% कमी</strong> गरी आएको रकम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=10" target="_blank">मूल हेर्नुहोस् (पृ.१०)</a>
    </p>
    <p>
    ग) धारा ८ को उप-खण्ड २ बमोजिम अव्यवस्थित जग्गामा लाग्ने <strong>बहाल र शुल्क</strong>को प्रयोजनका लागि जग्गाको मूल्याङ्कन दर देहायको दरबाट <strong>२०% कमी</strong> गरी आएको रकम हुनेछ। <a href="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf#page=10" target="_blank">मूल हेर्नुहोस् (पृ.१०)</a>
    </p>
    <table>
    <thead>
    <tr>
    <td><strong>हालको वडा नं.</strong></td>
    <td><strong>साविकको गाउँ विकास समिति</strong></td>
    <td><strong>जग्गा वर्गीकरण न्यूनतम मूल्याङ्कन दर</strong></td>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>१-४</td>
    <td>शङ्करनगर</td>
    <td rowspan="4">आर्थिक वर्ष २०८२/०८३ का लागि घर र जग्गा दर्ताको प्रयोजनका लागि भू-राजस्व कार्यालय, बुटवलले तोके बमोजिम हुनेछ।</td>
    </tr>
    <tr>
    <td>५-६</td>
    <td>आनन्दनगर</td>
    </tr>
    <tr>
    <td>७-९</td>
    <td>करहिया</td>
    </tr>
    <tr>
    <td>१०-१२</td>
    <td>मकरहारा</td>
    </tr>
    <tr>
    <td>१३-१४</td>
    <td>टिकुलीगढ</td>
    <td rowspan="3">आर्थिक वर्ष २०८२/०८३ का लागि भू-राजस्व कार्यालय, भैरहवाले तोके बमोजिम हुनेछ।</td>
    </tr>
    <tr>
    <td>१५-१६</td>
    <td>मधवलिया</td>
    </tr>
    <tr>
    <td>१७</td>
    <td>गंगोलिया</td>
    </tr>
    </tbody>
    </table>
    `,
  },
};

const extractText = (html) => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

const parseContent = (html) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const sections = [];
  const elements = doc.body.children;
  let currentSection = null;

  for (const element of elements) {
    if (
      element.tagName === "H1" ||
      element.tagName === "H2" ||
      element.tagName === "H3"
    ) {
      if (currentSection) {
        sections.push(currentSection);
      }
      currentSection = {
        title: element.textContent.trim(),
        content: element.outerHTML,
        originalLink: null,
      };
    } else {
      if (currentSection) {
        const tempDiv = document.createElement("div");
        tempDiv.appendChild(element.cloneNode(true));
        const link = tempDiv.querySelector(
          'a[href*="https://tilottamamun.gov.np/sites/tilottamamun.gov.np/files/documents/तिलोत्तमा%20नगरपालिकाको%20आर्थिक%20ऐन-२०८२.pdf"]'
        );

        if (link) {
          currentSection.originalLink = link.href;
          link.parentNode.removeChild(link);
        }
        currentSection.content += tempDiv.innerHTML;
      }
    }
  }
  if (currentSection) {
    sections.push(currentSection);
  }
  return sections;
};

const AreaLaw = () => {
  const [language, setLanguage] = useState("en");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const currentTranslation = translations[language];
  const translatedFilterOptions = currentTranslation.filterOptions;

  const handleLanguageChange = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "ne" : "en"));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const parsedContent = useMemo(
    () => parseContent(currentTranslation.actContent),
    [currentTranslation]
  );

  const filteredContent = useMemo(() => {
    let content = [...parsedContent];

    if (filter) {
      content = content.filter((section) => {
        const titleElement = new DOMParser()
          .parseFromString(section.content, "text/html")
          .body.querySelector("h1, h2, h3");
        if (titleElement) {
          return titleElement.tagName.toLowerCase() === filter.toLowerCase();
        }
        return false;
      });
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      content = content.filter((section) => {
        return extractText(section.content)
          .toLowerCase()
          .includes(lowerCaseSearchTerm);
      });
    }

    return content;
  }, [searchTerm, filter, parsedContent]);

  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans antialiased p-4 sm:p-8">
      <style>{`
        body {
          background-color: #111111;
        }
        .text-neon-green {
          color: #39FF14;
        }
        .border-neon-green {
          border-color: #39FF14;
        }
        .bg-gradient-to-r-neon {
          background-image: linear-gradient(to right, #39FF14, #00BFFF);
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 1rem;
        }
        th, td {
            border: 1px solid #4a5568;
            padding: 0.75rem;
            text-align: left;
        }
        thead {
            background-color: #2d3748;
        }
        tr:nth-child(even) {
            background-color: #2a3442;
        }
        .prose strong {
            color: #E2E8F0;
        }
      `}</style>
      <div className="max-w-4xl mx-auto py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r-neon">
              {currentTranslation.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400">
            {currentTranslation.subtitle}
          </p>
        </header>

        <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 items-center">
          <div className="flex-grow relative w-full">
            <input
              type="text"
              placeholder={currentTranslation.searchPlaceholder}
              className="w-full bg-gray-700 text-gray-200 border border-gray-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all duration-300"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <select
              className="w-full sm:w-auto bg-gray-700 text-gray-200 border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-neon-green focus:ring-1 focus:ring-neon-green transition-all duration-300 cursor-pointer appearance-none"
              value={filter}
              onChange={handleFilterChange}
            >
              {translatedFilterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <button
              onClick={handleLanguageChange}
              className="
    w-full sm:w-auto 
    px-4 py-2 
    border border-transparent 
    text-sm font-medium 
    rounded-md shadow-sm 
    text-black 
    hover:opacity-90
    bg-[#EAEAEA]
  "
            >
              {currentTranslation.switchLangButton}
            </button>
          </div>
        </div>

        <main>
          {filteredContent.length > 0 ? (
            filteredContent.map((section, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg p-6 mb-6 transition-transform transform hover:scale-[1.01] duration-300"
              >
                <div
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
                {section.originalLink && (
                  <div className="mt-4 text-right">
                    <a
                      href={section.originalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r-neon hover:bg-gradient-to-r-neon focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neon-green"
                    >
                      {currentTranslation.viewOriginal}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2 -mr-1 h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 text-center text-gray-400 text-lg">
              {currentTranslation.noResults}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AreaLaw;
