--Now that  I finished my database (I hope), I´m gonna test it by writing some querys


-------------------------------------------
-- 1. Listing all active Customers
--select c.CustomerID,
--c.Name,
--c.CustomerStatus
--from Customers c

--select c.CustomerID,
--c.Name,
--c.CustomerStatus
--from Customers c
--where c.CustomerStatus = 'active'

-------------------------------------------

-- 2. Listing specific date orders
--SELECT o.OrderID,
--       o.CustomerID,
--       o.Date,
--       o.FullAddress
--FROM Orders o
--WHERE o.Date BETWEEN '2024-08-10' and '2024-08-16'

-------------------------------------------

-- 3. Listing Avaliable Products
--select i.ItemID,
--i.ItemName,
--i.UnitPrice,
--i.Avaliable
--from Items i
--where i.Avaliable > 0

-------------------------------------------

-- 4. Listing Order by Customers (join)
--select c.CustomerID,
--c.Name,
--o.ItemID,
--o.FullAddress,
--o.Date
--from Orders o join Customers c on o.CustomerID = c.CustomerID

-------------------------------------------

-- 5. Listing Orders with Full Address
--select o.CustomerID,
--o.DeliveryID,
--a.AddressID,
--a.FullAddress
--from Orders o join Addresses a on o.AddressID = a.AddressID

-------------------------------------------

-- 6. Sales by Customers (join Customers, Orders and Invoice)
--select c.CustomerID,
--i.InvoiceID,
--c.CustomerStatus,
--c.OverCount,
--i.OrderID,
--i.NumberUnits,
--i.Description
--from Customers c join Orders o on c.CustomerID = o.CustomerID
--join Invoice i on i.OrderID = o.OrderID

