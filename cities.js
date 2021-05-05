var CITIES = [
    {
        "city": "Berlin", 
        "lat": "52.5167", 
        "lng": "13.3833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Berlin", 
        "capital": "primary", 
        "population": "3644826", 
        "population_proper": "3644826"
    }, 
    {
        "city": "Hamburg", 
        "lat": "53.5500", 
        "lng": "10.0000", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hamburg", 
        "capital": "admin", 
        "population": "1841179", 
        "population_proper": "1841179"
    }, 
    {
        "city": "Munich", 
        "lat": "48.1372", 
        "lng": "11.5755", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "admin", 
        "population": "1471508", 
        "population_proper": "1471508"
    }, 
    {
        "city": "Cologne", 
        "lat": "50.9422", 
        "lng": "6.9578", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "1085664", 
        "population_proper": "1085664"
    }, 
    {
        "city": "Frankfurt", 
        "lat": "50.1136", 
        "lng": "8.6797", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hesse", 
        "capital": "minor", 
        "population": "753056", 
        "population_proper": "753056"
    }, 
    {
        "city": "Bremen", 
        "lat": "53.1153", 
        "lng": "8.7975", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bremen", 
        "capital": "admin", 
        "population": "724909", 
        "population_proper": "546501"
    }, 
    {
        "city": "Stuttgart", 
        "lat": "48.7761", 
        "lng": "9.1775", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "admin", 
        "population": "634830", 
        "population_proper": "634830"
    }, 
    {
        "city": "D\u00fcsseldorf", 
        "lat": "51.2311", 
        "lng": "6.7724", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "admin", 
        "population": "619294", 
        "population_proper": "619294"
    }, 
    {
        "city": "Dortmund", 
        "lat": "51.5139", 
        "lng": "7.4653", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "587010", 
        "population_proper": "587010"
    }, 
    {
        "city": "Essen", 
        "lat": "51.4508", 
        "lng": "7.0131", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "583109", 
        "population_proper": "583109"
    }, 
    {
        "city": "Dresden", 
        "lat": "51.0493", 
        "lng": "13.7384", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saxony", 
        "capital": "admin", 
        "population": "555805", 
        "population_proper": "555805"
    }, 
    {
        "city": "Leipzig", 
        "lat": "51.3500", 
        "lng": "12.3833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saxony", 
        "capital": "minor", 
        "population": "542529", 
        "population_proper": "504971"
    }, 
    {
        "city": "Hannover", 
        "lat": "52.3744", 
        "lng": "9.7386", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "admin", 
        "population": "538068", 
        "population_proper": "538068"
    }, 
    {
        "city": "Nuremberg", 
        "lat": "49.4528", 
        "lng": "11.0778", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "518365", 
        "population_proper": "518365"
    }, 
    {
        "city": "Duisburg", 
        "lat": "51.4322", 
        "lng": "6.7611", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "498590", 
        "population_proper": "498590"
    }, 
    {
        "city": "Bochum", 
        "lat": "51.4833", 
        "lng": "7.2167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "364628", 
        "population_proper": "364628"
    }, 
    {
        "city": "Wuppertal", 
        "lat": "51.2667", 
        "lng": "7.1833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "354382", 
        "population_proper": "354382"
    }, 
    {
        "city": "Bielefeld", 
        "lat": "52.0167", 
        "lng": "8.5333", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "333786", 
        "population_proper": "333786"
    }, 
    {
        "city": "Bonn", 
        "lat": "50.7339", 
        "lng": "7.0997", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "327258", 
        "population_proper": "327258"
    }, 
    {
        "city": "M\u00fcnster", 
        "lat": "51.9625", 
        "lng": "7.6256", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "314319", 
        "population_proper": "314319"
    }, 
    {
        "city": "Karlsruhe", 
        "lat": "49.0167", 
        "lng": "8.4000", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "313092", 
        "population_proper": "313092"
    }, 
    {
        "city": "Mannheim", 
        "lat": "49.4878", 
        "lng": "8.4661", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "309370", 
        "population_proper": "309370"
    }, 
    {
        "city": "Augsburg", 
        "lat": "48.3717", 
        "lng": "10.8983", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "295135", 
        "population_proper": "295135"
    }, 
    {
        "city": "Wiesbaden", 
        "lat": "50.0825", 
        "lng": "8.2400", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hesse", 
        "capital": "admin", 
        "population": "278342", 
        "population_proper": "278342"
    }, 
    {
        "city": "M\u00f6nchengladbach", 
        "lat": "51.2000", 
        "lng": "6.4333", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "261454", 
        "population_proper": "261454"
    }, 
    {
        "city": "Gelsenkirchen", 
        "lat": "51.5167", 
        "lng": "7.1000", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "260654", 
        "population_proper": "260654"
    }, 
    {
        "city": "Braunschweig", 
        "lat": "52.2692", 
        "lng": "10.5211", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "248292", 
        "population_proper": "248292"
    }, 
    {
        "city": "Kiel", 
        "lat": "54.3233", 
        "lng": "10.1394", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Schleswig-Holstein", 
        "capital": "admin", 
        "population": "247548", 
        "population_proper": "247548"
    }, 
    {
        "city": "Aachen", 
        "lat": "50.7762", 
        "lng": "6.0838", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "247380", 
        "population_proper": "247380"
    }, 
    {
        "city": "Chemnitz", 
        "lat": "50.8333", 
        "lng": "12.9167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saxony", 
        "capital": "minor", 
        "population": "245403", 
        "population_proper": "245403"
    }, 
    {
        "city": "Halle", 
        "lat": "51.4828", 
        "lng": "11.9697", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saxony-Anhalt", 
        "capital": "minor", 
        "population": "239257", 
        "population_proper": "239257"
    }, 
    {
        "city": "Magdeburg", 
        "lat": "52.1278", 
        "lng": "11.6292", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saxony-Anhalt", 
        "capital": "admin", 
        "population": "238697", 
        "population_proper": "238697"
    }, 
    {
        "city": "Freiburg im Breisgau", 
        "lat": "47.9947", 
        "lng": "7.8497", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "230241", 
        "population_proper": "230241"
    }, 
    {
        "city": "Krefeld", 
        "lat": "51.3333", 
        "lng": "6.5667", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "227020", 
        "population_proper": "227020"
    }, 
    {
        "city": "L\u00fcbeck", 
        "lat": "53.8697", 
        "lng": "10.6864", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Schleswig-Holstein", 
        "capital": "minor", 
        "population": "217198", 
        "population_proper": "217198"
    }, 
    {
        "city": "Oberhausen", 
        "lat": "51.4699", 
        "lng": "6.8514", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "210829", 
        "population_proper": "210829"
    }, 
    {
        "city": "Rostock", 
        "lat": "54.0833", 
        "lng": "12.1333", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Mecklenburg-Western Pomerania", 
        "capital": "", 
        "population": "208886", 
        "population_proper": "208886"
    }, 
    {
        "city": "Erfurt", 
        "lat": "50.9787", 
        "lng": "11.0328", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Thuringia", 
        "capital": "admin", 
        "population": "203254", 
        "population_proper": "175476"
    }, 
    {
        "city": "Kassel", 
        "lat": "51.3158", 
        "lng": "9.4979", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hesse", 
        "capital": "minor", 
        "population": "201585", 
        "population_proper": "201585"
    }, 
    {
        "city": "Hagen", 
        "lat": "51.3594", 
        "lng": "7.4750", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "188814", 
        "population_proper": "188814"
    }, 
    {
        "city": "Mainz", 
        "lat": "50.0000", 
        "lng": "8.2711", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Rhineland-Palatinate", 
        "capital": "admin", 
        "population": "184997", 
        "population_proper": "184997"
    }, 
    {
        "city": "Saarbr\u00fccken", 
        "lat": "49.2333", 
        "lng": "7.0000", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saarland", 
        "capital": "admin", 
        "population": "180741", 
        "population_proper": "180741"
    }, 
    {
        "city": "Hamm", 
        "lat": "51.6667", 
        "lng": "7.8167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "179111", 
        "population_proper": "179111"
    }, 
    {
        "city": "Potsdam", 
        "lat": "52.4000", 
        "lng": "13.0667", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Brandenburg", 
        "capital": "admin", 
        "population": "178089", 
        "population_proper": "178089"
    }, 
    {
        "city": "Ludwigshafen", 
        "lat": "49.4811", 
        "lng": "8.4353", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Rhineland-Palatinate", 
        "capital": "minor", 
        "population": "171061", 
        "population_proper": "171061"
    }, 
    {
        "city": "M\u00fclheim", 
        "lat": "51.4283", 
        "lng": "6.8789", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "170880", 
        "population_proper": "170880"
    }, 
    {
        "city": "Oldenburg", 
        "lat": "53.1439", 
        "lng": "8.2139", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "168210", 
        "population_proper": "168210"
    }, 
    {
        "city": "Osnabr\u00fcck", 
        "lat": "52.2789", 
        "lng": "8.0431", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "164748", 
        "population_proper": "164748"
    }, 
    {
        "city": "Leverkusen", 
        "lat": "51.0333", 
        "lng": "6.9833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "163838", 
        "population_proper": "163838"
    }, 
    {
        "city": "Heidelberg", 
        "lat": "49.4122", 
        "lng": "8.7100", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "160355", 
        "population_proper": "160355"
    }, 
    {
        "city": "Solingen", 
        "lat": "51.1667", 
        "lng": "7.0833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "159360", 
        "population_proper": "159360"
    }, 
    {
        "city": "Darmstadt", 
        "lat": "49.8667", 
        "lng": "8.6500", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hesse", 
        "capital": "minor", 
        "population": "159207", 
        "population_proper": "159207"
    }, 
    {
        "city": "Herne", 
        "lat": "51.5426", 
        "lng": "7.2190", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "156374", 
        "population_proper": "156374"
    }, 
    {
        "city": "Neuss", 
        "lat": "51.2003", 
        "lng": "6.6939", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "153796", 
        "population_proper": "153796"
    }, 
    {
        "city": "Regensburg", 
        "lat": "49.0167", 
        "lng": "12.0833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "152610", 
        "population_proper": "152610"
    }, 
    {
        "city": "Paderborn", 
        "lat": "51.7167", 
        "lng": "8.7667", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "150580", 
        "population_proper": "150580"
    }, 
    {
        "city": "Ingolstadt", 
        "lat": "48.7636", 
        "lng": "11.4261", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "136981", 
        "population_proper": "136981"
    }, 
    {
        "city": "W\u00fcrzburg", 
        "lat": "49.7944", 
        "lng": "9.9294", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "127880", 
        "population_proper": "127880"
    }, 
    {
        "city": "F\u00fcrth", 
        "lat": "49.4783", 
        "lng": "10.9903", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "127748", 
        "population_proper": "127748"
    }, 
    {
        "city": "Ulm", 
        "lat": "48.3984", 
        "lng": "9.9916", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "126329", 
        "population_proper": "126329"
    }, 
    {
        "city": "Heilbronn", 
        "lat": "49.1404", 
        "lng": "9.2180", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "125960", 
        "population_proper": "125960"
    }, 
    {
        "city": "Pforzheim", 
        "lat": "48.8950", 
        "lng": "8.7050", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "125542", 
        "population_proper": "125542"
    }, 
    {
        "city": "Wolfsburg", 
        "lat": "52.4231", 
        "lng": "10.7872", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "124151", 
        "population_proper": "124151"
    }, 
    {
        "city": "G\u00f6ttingen", 
        "lat": "51.5339", 
        "lng": "9.9356", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "119801", 
        "population_proper": "119801"
    }, 
    {
        "city": "Bottrop", 
        "lat": "51.5232", 
        "lng": "6.9253", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "117383", 
        "population_proper": "117383"
    }, 
    {
        "city": "Reutlingen", 
        "lat": "48.4833", 
        "lng": "9.2167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "115966", 
        "population_proper": "115966"
    }, 
    {
        "city": "Koblenz", 
        "lat": "50.3597", 
        "lng": "7.5978", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Rhineland-Palatinate", 
        "capital": "minor", 
        "population": "114024", 
        "population_proper": "114024"
    }, 
    {
        "city": "Bremerhaven", 
        "lat": "53.5500", 
        "lng": "8.5833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bremen", 
        "capital": "", 
        "population": "113634", 
        "population_proper": "113634"
    }, 
    {
        "city": "Recklinghausen", 
        "lat": "51.6167", 
        "lng": "7.2000", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "112267", 
        "population_proper": "112267"
    }, 
    {
        "city": "Bergisch Gladbach", 
        "lat": "50.9917", 
        "lng": "7.1367", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "111966", 
        "population_proper": "111966"
    }, 
    {
        "city": "Erlangen", 
        "lat": "49.5964", 
        "lng": "11.0044", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "111962", 
        "population_proper": "111962"
    }, 
    {
        "city": "Jena", 
        "lat": "50.9272", 
        "lng": "11.5864", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Thuringia", 
        "capital": "minor", 
        "population": "111407", 
        "population_proper": "111407"
    }, 
    {
        "city": "Remscheid", 
        "lat": "51.1906", 
        "lng": "7.2247", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "110994", 
        "population_proper": "110994"
    }, 
    {
        "city": "Trier", 
        "lat": "49.7567", 
        "lng": "6.6414", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Rhineland-Palatinate", 
        "capital": "minor", 
        "population": "110636", 
        "population_proper": "110636"
    }, 
    {
        "city": "Salzgitter", 
        "lat": "52.1503", 
        "lng": "10.3593", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "104948", 
        "population_proper": "104948"
    }, 
    {
        "city": "Moers", 
        "lat": "51.4592", 
        "lng": "6.6197", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "103725", 
        "population_proper": "103725"
    }, 
    {
        "city": "Siegen", 
        "lat": "50.8756", 
        "lng": "8.0167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "102836", 
        "population_proper": "102836"
    }, 
    {
        "city": "Hildesheim", 
        "lat": "52.1500", 
        "lng": "9.9500", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Lower Saxony", 
        "capital": "minor", 
        "population": "101990", 
        "population_proper": "101990"
    }, 
    {
        "city": "Cottbus", 
        "lat": "51.7606", 
        "lng": "14.3342", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Brandenburg", 
        "capital": "minor", 
        "population": "100219", 
        "population_proper": "100219"
    }, 
    {
        "city": "G\u00fctersloh", 
        "lat": "51.9000", 
        "lng": "8.3833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "100194", 
        "population_proper": "100194"
    }, 
    {
        "city": "Kaiserslautern", 
        "lat": "49.4447", 
        "lng": "7.7689", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Rhineland-Palatinate", 
        "capital": "minor", 
        "population": "100030", 
        "population_proper": "100030"
    }, 
    {
        "city": "Witten", 
        "lat": "51.4333", 
        "lng": "7.3333", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "96563", 
        "population_proper": "96563"
    }, 
    {
        "city": "Hanau", 
        "lat": "50.1328", 
        "lng": "8.9169", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hesse", 
        "capital": "minor", 
        "population": "96023", 
        "population_proper": "96023"
    }, 
    {
        "city": "Schwerin", 
        "lat": "53.6333", 
        "lng": "11.4167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Mecklenburg-Western Pomerania", 
        "capital": "admin", 
        "population": "95818", 
        "population_proper": "95818"
    }, 
    {
        "city": "Gera", 
        "lat": "50.8782", 
        "lng": "12.0824", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Thuringia", 
        "capital": "minor", 
        "population": "94152", 
        "population_proper": "94152"
    }, 
    {
        "city": "Esslingen", 
        "lat": "48.7406", 
        "lng": "9.3108", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "93542", 
        "population_proper": "93542"
    }, 
    {
        "city": "Ludwigsburg", 
        "lat": "48.8975", 
        "lng": "9.1919", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "93499", 
        "population_proper": "93499"
    }, 
    {
        "city": "Iserlohn", 
        "lat": "51.3833", 
        "lng": "7.6667", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "92666", 
        "population_proper": "92666"
    }, 
    {
        "city": "D\u00fcren", 
        "lat": "50.8000", 
        "lng": "6.4833", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "minor", 
        "population": "90733", 
        "population_proper": "90733"
    }, 
    {
        "city": "T\u00fcbingen", 
        "lat": "48.5200", 
        "lng": "9.0556", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "90546", 
        "population_proper": "90546"
    }, 
    {
        "city": "Flensburg", 
        "lat": "54.7819", 
        "lng": "9.4367", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Schleswig-Holstein", 
        "capital": "minor", 
        "population": "90164", 
        "population_proper": "90164"
    }, 
    {
        "city": "Zwickau", 
        "lat": "50.7189", 
        "lng": "12.4961", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Saxony", 
        "capital": "minor", 
        "population": "89540", 
        "population_proper": "89540"
    }, 
    {
        "city": "Gie\u00dfen", 
        "lat": "50.5833", 
        "lng": "8.6667", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Hesse", 
        "capital": "minor", 
        "population": "88546", 
        "population_proper": "88546"
    }, 
    {
        "city": "Ratingen", 
        "lat": "51.3000", 
        "lng": "6.8500", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "87297", 
        "population_proper": "87297"
    }, 
    {
        "city": "L\u00fcnen", 
        "lat": "51.6167", 
        "lng": "7.5167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "86449", 
        "population_proper": "86449"
    }, 
    {
        "city": "Villingen-Schwenningen", 
        "lat": "48.0603", 
        "lng": "8.4586", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "minor", 
        "population": "85181", 
        "population_proper": "85181"
    }, 
    {
        "city": "Konstanz", 
        "lat": "47.6633", 
        "lng": "9.1753", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Baden-W\u00fcrttemberg", 
        "capital": "", 
        "population": "84760", 
        "population_proper": "84760"
    }, 
    {
        "city": "Marl", 
        "lat": "51.6667", 
        "lng": "7.1167", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "North Rhine-Westphalia", 
        "capital": "", 
        "population": "83941", 
        "population_proper": "83941"
    }, 
    {
        "city": "Worms", 
        "lat": "49.6319", 
        "lng": "8.3653", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Rhineland-Palatinate", 
        "capital": "minor", 
        "population": "83330", 
        "population_proper": "83330"
    },
    {
        "city": "Bamberg", 
        "lat": "49.8917", 
        "lng": "10.8917", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "77592", 
        "population_proper": "77592"
    },
    {
        "city": "Bayreuth", 
        "lat": "49.9481", 
        "lng": "11.5783", 
        "country": "Germany", 
        "iso2": "DE", 
        "admin_name": "Bavaria", 
        "capital": "minor", 
        "population": "74657", 
        "population_proper": "74657"
    }    
];

module.exports = CITIES;