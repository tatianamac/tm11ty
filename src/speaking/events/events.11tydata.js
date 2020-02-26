module.experts = function compareDate(date) {
 
    date1 = new Date('{{ date }}'.value);
    date2 = new Date();
     
    if (date1 > date2)
    {
    return false;
    }
    return true;
    }