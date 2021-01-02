const auditProps = {
    createdAt: { default: new Date },
    updatedAt: { default: new Date },
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    updatedBy: { type: Schema.Types.ObjectId, ref: "User" },
}

const Model = defaultProps => {
    return (name, props) => {
        const schema = moongose.schema({
            ...defaultProps,
            ...props,
        });
        return moongose.model(name, schema); 
    }
}

export const withAudit = Model(auditProps); 


//... en otro archivo

withAudit("Product", {
    name: String,
    desc: String,
});
