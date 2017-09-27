tell application "System Events" to set apps to unix id of every application process whose visible is true and name is not "Finder" and name is not "Mail" and unix id is not "92184"
repeat with closeid in apps
	do shell script ("kill " & closeid)
end repeat