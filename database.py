import sqlite3 

#Open database
conn = sqlite3.connect('base.db')

#Create table
conn.execute('''CREATE TABLE address 
			(email TEXT,
			address TEXT,
			postcode TEXT,
			mobile TEXT
		)''')

conn.close()
