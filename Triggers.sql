-- Verificar que las regiones si existan
-- Aqui son dos triggers en en la tabla pokemon y ponerlo en Before Update y Before Insert 
BEGIN
    IF NEW.region NOT IN ('kanto', 'johto', 'hoenn', 'sinnoh', 'unova', 'kalos', 'alola', 'galar', 'paldea') THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Región no válida';
    END IF;
END

